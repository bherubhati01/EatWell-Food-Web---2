 
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({ category }) {
    const {url} =  useContext(StoreContext)
    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display' id="food-display">
            <h2>Top Dishes near you</h2>
            <div className="food-display-item">
                {food_list.map((item, index) => {
                    if (category==="All" || category === item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={url+"/images/"+item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;