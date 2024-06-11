import React from 'react'
import "./Footer.css"
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <hr  className='chiziq'/>
            <div className="footer-nav">
                <div className="fNav-l">
                    <p>Mijoz xizmatlari</p>
                    <p>Information</p>
                    <p>About</p>
                </div>
                <div className="fNav-r">
                    <p>Contact <br /> +998 97 665 55 07</p>
                </div>
            </div>
            <div className="footer-links">
                <FaTelegram />
                <FaInstagramSquare />
                <FaFacebook />
            </div>
        </div>
    </div>
  )
}

export default Footer