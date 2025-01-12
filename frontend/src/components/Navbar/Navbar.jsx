/* eslint-disable react/prop-types */
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar({ setShowLogin }) {
    const navigate = useNavigate();

    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, setToken, token } = useContext(StoreContext)
    const logOut = () =>{
        localStorage.removeItem("token")
        setToken("")
        navigate("")
    }
    


    return (
        <div className='Navbar'>
            <Link to="/"> <img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="nav-menu">
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
                </div>
                {
                    token==""
                        ? <button onClick={() => setShowLogin(true)}>Sign in</button>
                        : <div className="navbar-profile">
                            <img src={assets.profile_icon} alt="profile" />
                            <ul className="nav-profile-dropdown">
                                <li onClick={()=>navigate("/myorder")}><img src={assets.bag_icon} alt="bag" />Orders</li>
                                <hr />
                                <li onClick={logOut}><img src={assets.logout_icon} alt="logout" />Logout</li>
                            </ul>
                        </div>
                }

            </div>
        </div>
    )
}

export default Navbar