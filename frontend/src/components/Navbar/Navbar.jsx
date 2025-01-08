/* eslint-disable react/prop-types */
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar({ setShowLogin }) {

    const [menu, setMenu] = useState("home");
    const{getTotalCartAmount} = useContext(StoreContext)


    return (
        <div className='Navbar'> 
            <Link to="EatWell-Food-Web---2"> <img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="nav-menu">
                <Link to="EatWell-Food-Web---2" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='/EatWell-Food-Web---2#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to="EatWell-Food-Web---2/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()>0 ? "dot" : ""}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar