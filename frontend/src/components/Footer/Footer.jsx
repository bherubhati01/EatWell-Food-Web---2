import { assets } from "../../assets/assets"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repudiandae veritatis vel. Modi asperiores optio, cumque architecto cupiditate dignissimos consequuntur fugit aspernatur rem delectus obcaecati placeat doloribus repellendus unde porro.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 852369741</li>
                    <li>admin@eatwell.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            copyright 2025 &copy; EatWell.com - All Right Reserved
        </p>
    </div>
  )
}

export default Footer