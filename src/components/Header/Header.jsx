import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import Product from '../Card/Product';
import { FaLongArrowAltRight } from "react-icons/fa";

function Header({ mainData }) {
    const [products, setProducts] = useState([])

    function allProducts(params) {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://apisecommerce.pythonanywhere.com/product/all/", requestOptions)
            .then((response) => response.json())
            .then((result) => setProducts(result.results))
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        allProducts()
    }, [])
    return (

        <>
            {console.log(mainData)}
            <div className="header">
                <div className="container">

                    <div className="header-main">
                        <div className="header-background">
                            <img src="./imgs/Rectangle 10.png" alt="" />
                            <h1>MEN’S FASHION</h1>
                        </div>
                        <div className="categories">
                            <div className="category-box">
                                <div className="category-image">
                                    <img src="./imgs/image 41.png" alt="" />
                                </div>
                                <p>Ko’ylaklar</p>
                            </div>
                            <div className="category-box">
                                <div className="category-image">
                                    <img src="./imgs/kurtka.png" alt="" />
                                </div>
                                <p>Kurtkalar</p>
                            </div>
                            <div className="category-box">
                                <div className="category-image">
                                    <img src="./imgs/shim.png" alt="" />
                                </div>
                                <p>Shimlar</p>
                            </div>
                            <div className="category-box">
                                <div className="category-image">
                                    <img src="./imgs/krasofka.png" alt="" />
                                </div>
                                <p>Oyoq kiyim</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="container">
                    <h1>Yangi kelganlar</h1>
                    <div className="news-box">
                        <div className="news-right">
                            <Link to={`/card/${mainData[4]?.id}`}><img src={`https://apisecommerce.pythonanywhere.com${mainData[4]?.product_files[0]?.file}`} alt="" /></Link>
                            <div className="news-price">
                                <p>{Math.floor((mainData[4]?.price) / 12)}$</p>
                                <span><MdOutlineArrowRightAlt /></span>
                            </div>
                        </div>
                        <div className="news-left">
                            {mainData?.map((item) => {
                                return (<div className="newL-boxes">
                                    <Link to={`/card/${item?.id}`}><img src={`https://apisecommerce.pythonanywhere.com${item?.product_files[0]?.file}`} alt="" /></Link>
                                </div>)
                            })}

                        </div>
                    </div>
                </div>
            </div>
            <div className="yellow-card">

            </div>
            <div className="season">
                <div className="container">
                    <Link to={"/filter"}><h1>Yozgi kolleksiyalar <FaLongArrowAltRight /> </h1></Link>
                    <div className="season-box">
                        {products?.map((item) => {
                            return (<Product item={item} />)
                        })}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Header