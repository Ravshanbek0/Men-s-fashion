import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import { CiShoppingBasket } from "react-icons/ci";
    

function Product({item}) {
    return (
        <div className="seaseon-boxes">
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
        </div>
    )
}

export default Product