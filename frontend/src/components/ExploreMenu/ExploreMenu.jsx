/* eslint-disable react/prop-types */
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category, setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Choose From a Diverse Menu Featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, idx)=>{
          return(
            <div onClick={()=>setCategory((prev)=>prev===item.menu_name ? "All" : item.menu_name)} key={idx} className="explore-menu-list-item">
              <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="Item" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu