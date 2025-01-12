/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Orders.css'
import axios from "axios"
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { assets } from '../../assets/assets';

function Order({ url }) {

  const [orders, setOrders] = useState([]);
  // const [ status , setStatus] = useState("Food Processing")

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.data) {
      setOrders(response.data.data)
      console.log(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId) =>{
    const status = event.target.value;
    console.log(status, orderId)
    const response = await axios.post(url+"/api/order/status" , {orderId,status} )
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ToastContainer />
      <div className='order add'>
        <h3>Order Page</h3>
        <div className="order-list">
          {orders.map((order, index) => {
            return (
              <div key={index} className="order-item">
                <img src={assets.parcel_icon} alt="order" />
                <div>
                  <p className='order-item-food'>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity
                      } else {
                        return item.name + " x " + item.quantity + ",  "
                      }
                    })}
                  </p>
                  <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
                  <div className="order-item-address">
                    <p>{order.address.street + ","}</p>
                    <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}</p>
                  </div>
                  <p className='order-item-phone'>{order.address.phone}</p>
                </div>
                <p>Items : {order.items.length}</p>
                <p>${order.amount}</p>
                <select onChange={(event)=>statusHandler(event, order._id)} value={order.status}>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            )

          })}
        </div>
      </div>
    </>
  )
}

export default Order