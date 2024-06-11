import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

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
                            <img src="./imgs/img1.png" alt="" />
                            <div className="news-price">
                                <p>12$</p>
                                <span><MdOutlineArrowRightAlt /></span>
                            </div>
                        </div>
                        <div className="news-left">
                            {mainData?.map((item) => {
                                return (<div className="newL-boxes">
                                    <Link to={`/card/${item?.id}`}><img src={`https://apisecommerce.pythonanywhere.com${item?.product_files[0]?.file}`} alt="" /></Link>
                                </div>)
                            })}
                            {/* <div className="newL-boxes">
                                <Link to={'/card'}><img src={`https://apisecommerce.pythonanywhere.com/${mainData[0]?.product_files[0]?.file}`} alt="" /></Link>
                            </div>
                            <div className="newL-boxes">
                                <Link to={'/card'}><img src={`https://apisecommerce.pythonanywhere.com/${mainData[1]?.product_files[1]?.file}`} alt="" /></Link>
                            </div>
                            <div className="newL-boxes">
                                <Link to={'/card'}> <img src="./imgs/img4.png" alt="" /></Link>
                            </div>
                            <div className="newL-boxes">
                                <Link to={'/card'}><img src="./imgs/img5.png" alt="" /></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="yellow-card">

            </div>
            <div className="season">
                <div className="container">
                    <h1>Yozgi kolleksiyalar</h1>
                    <div className="season-box">
                        {products?.map((item) => {
                            return (<div className="seaseon-boxes">
                                <div className="season-img">
                                    <Link to={`/card/${item.id}`}><img src={`https://apisecommerce.pythonanywhere.com${item?.product_files[0]?.file}`} alt="" /></Link>
                                </div>
                                <div className="season-text">
                                    <p>{item?.name} <br />
                                        {`${item?.price} 000 so'm`}</p>
                                    <span className="store">
                                        <CiShoppingBasket />
                                    </span>
                                </div>
                            </div>)
                        })}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Header