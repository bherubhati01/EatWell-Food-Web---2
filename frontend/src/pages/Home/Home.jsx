import { useContext, useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

function Home() {
  
  const { getTotalCartAmount } = useContext(StoreContext)
  let [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}></FoodDisplay>
      {getTotalCartAmount()>0 && <Link className='flot-Cart' to="/cart"><img src={assets.basket_icon} alt="" /></Link>}
      <AppDownload/>
    </div>
  )
}

export default Home