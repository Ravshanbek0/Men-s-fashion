import React from 'react'
import './Navbar.css'
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
            <div className='nav'>
                <div className="logo">
                    <Link to={"/"}><img src="../imgs/Logo.png" alt="" /></Link>
                </div>
                <div className="nav-text">
                    <ul>
                        <Link to={'/'}><li><a href="">HOME</a></li></Link>
                        <Link to={"/filter"}><li><a href="">PRODUCT</a></li></Link>
                        <li><a href="">ABOUT</a></li>
                    </ul>
                </div>
                <div className="nav-save">
                    <div className="nav-input-box">
                        <span><CiSearch /></span>
                        <input type="text" />
                    </div>
                    <span><CiHeart /></span>
                    <span><CiShoppingBasket /></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar