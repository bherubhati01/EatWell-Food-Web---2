import { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data, [name]: value
    }))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItem = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItem.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItem,
      amount: getTotalCartAmount() + 2,
    }
    let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  }

  const nevigate = useNavigate();

  useEffect(() => {
    if (!token) {
      nevigate('/cart')
    } else if (getTotalCartAmount === 0) {
      nevigate('/cart')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required onChange={onChangeHandler} value={data.firstName} name='firstName' type="text" placeholder='First name' />
          <input required onChange={onChangeHandler} value={data.lastName} name='lastName' type="text" placeholder='Last name' />
        </div>
        <input required onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder='Email' />
        <input required onChange={onChangeHandler} value={data.street} name='street' type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required onChange={onChangeHandler} value={data.city} name='city' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} value={data.state} name='state' type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required onChange={onChangeHandler} value={data.zipCode} name='zipCode' type="text" placeholder='Zip/Pin Code' />
          <input required onChange={onChangeHandler} value={data.country} name='country' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} value={data.phone} name='phone' type="number" placeholder='Phone Number' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totls</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder