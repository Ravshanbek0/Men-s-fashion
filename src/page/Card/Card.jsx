import React, { useEffect, useState } from 'react'
import "./Card.css"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom';

function Card({ mainData }) {
  const [cardData, setCardData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const cardObj = mainData.filter((item) => {
      return item.id == id
    })
    setCardData(cardObj)
    setIMg(`https://apisecommerce.pythonanywhere.com${cardObj[0]?.product_files[0]?.file}`)
  }, [mainData])
  const [img, setIMg] = useState("./imgs/big krasofka.png")
  return (
    <div onLoad={
      window.scrollTo({
        top: 5
      })
    } className='Card'>
      <div className="container">
        <div className="card-box">
          {/* <div className="card-left">
            <div className="arrow-up"><IoIosArrowUp /></div>
            <div className="imgs-card" onClick={()=>{
              setIMg("./imgs/krasofka.png")
            }}>
              <img src="./imgs/krasofka.png" alt="" />
            </div>
            <div className="imgs-card" onClick={()=>{
              setIMg("./imgs/krasofka 2.png")
            }}>
              <img src="./imgs/krasofka 2.png" alt="" />
            </div>
            <div className="imgs-card">
              <img src="./imgs/krasofka 2.png" alt="" />
            </div>
            <div className="arrow-up"><IoIosArrowDown /></div>
          </div> */}
          <div className="card-bottom">
            <img src={img} alt="" />
          </div>
          <div className="card-right">
            <h1>{cardData[0]?.name}</h1>
            <div className="size">
              <div className="size-l">
                <p>O’lchaminggizni tanlang:</p>
                <div className="sizes">
                  {cardData[0]?.sizes?.map((item) => {
                    return (<div className="square-size">
                      {cardData[0]?.sizes[0]?.size}
                    </div>)
                  })}

                </div>
              </div>
              <div className="size-r">
                <p>Rangi:</p>
                <div className="colors">
                  {cardData[0]?.colors[0]?.name}
                </div>
              </div>
            </div>
            <hr className='hr-size' />
            <h2>{cardData[0]?.info}</h2>
            <h3>{`${cardData[0]?.price} 000 so'm`}</h3>
            <div className="btns">
              <button>Savatga qo'shish</button>
              <div className="heart">
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card