/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import './FoodItem.css'
import { StoreContext } from "../../Context/StoreContext";


function FoodItem({ id, name, price, description, image }) {

  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-img" />
        {
          !cartItems[id]
            ? <img onClick={() => addToCart(id)} className="add" src={assets.add_icon_white} alt="add" />
            : <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="5 Star" />
        </div>
        <p className="food-item-decs">{description}</p>
        <p className="food-item-price">$ {price}</p>
      </div>
    </div>
  )
}

export default FoodItem