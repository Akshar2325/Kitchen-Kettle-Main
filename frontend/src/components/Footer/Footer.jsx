import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos debitis magni quod consectetur beatae sint dolore voluptate voluptas tempore quos eius voluptatibus ipsum tempora possimus corrupti, adipisci repudiandae sit est. Tempora soluta, eius velit iste repellat, laudantium et, ipsam quo esse provident porro necessitatibus? Adipisci excepturi esse consequuntur dicta distinctio.</p>
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
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-635333-1705</li>
                        <li>aksharbhesaniya@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyrights'>Copyright 2024 @ Tomota.com - All rights  Reserved.</p>
        </div>
    )
}

export default Footer
