import './MyOrders.css'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from "../../Context/StoreContext.jsx"
import axios from 'axios';
import { assets } from '../../assets/assets.js'

function MyOrders() {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrder = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrder();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="orders" />
                            <p>{order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " x " + item.quantity;
                                } else {
                                    return item.name + " x " + item.quantity + ", "
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span  style={order.status === "Delivered" ? { color: "green" } : {}}>&#x25cf;</span> <b>{order.status}</b> </p>
                            <button onClick={fetchOrder}>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders