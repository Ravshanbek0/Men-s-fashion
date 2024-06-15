import React, { useEffect, useState } from 'react'
import "./Filter.css"
import Product from '../../components/Card/Product'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdExpandLess } from "react-icons/md";
import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import { TbMenuDeep } from "react-icons/tb";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function Filter() {
  const [productData, setProductData] = useState([])
  const [productData2, setProductData2] = useState([])
  function getData() {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://apisecommerce.pythonanywhere.com/product/new/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProductData(result)
        setProductData2(result)
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    getData()
  }, [])

  const [value, setValue] = useState([10000, 300000])

  const [category, setCategory] = useState([])
  const [color, setColor] = useState([])
  const [size, setSize] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}`;
  }
  console.log(value);
  // console.log(productData2);
  function filtered() {
    var newData = []
    var filter_category, filter_size, filter_price;

    if (category.length > 0) {
      filter_category = productData2.filter((item) => {
        return category.includes(item.category?.name)

      })

    } else {
      filter_category = productData2
    }

    if (size.length > 0) {
      filter_size = productData2.filter((item) => {
        return size.includes(item.sizes[0].size)
      })
    } else {
      filter_size = productData2
    }

    filter_price = productData2.filter((item) => {
      return item.price < Math.floor((value[1]) / 1000) && item.price > Math.floor((value[0]) / 1000);
    });

    var newObj = filter_category.filter((item) => {
      return filter_size.includes(item) && filter_price.includes(item)
    })
    console.log(filter_price);
    setProductData(newObj)
  }

  return (
    <div >
      <div className="container">

        <p className='home_shop'>Home/Shop</p>
        <div className="filter-main">
          <div className="filter_left">
            <span className='filters'><TbMenuDeep />Filters</span>
            <hr style={{ margin: "30px 0px" }} />
            <Accordion>
              <AccordionSummary
                expandIcon={<MdExpandLess />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Category
              </AccordionSummary>
              <AccordionDetails onChange={(e) => {
                if (!category.includes(e.target.value)) {
                  category.push(e.target.value);
                  setCategory(category)
                } else {
                  const filter_category = category.filter((item) => {
                    return item != e.target.value
                  })
                  setCategory(filter_category)
                }
              }}>

                <div className="filter-category">
                  <label>
                    <Checkbox value={"Futbolkalar"} />
                    Futbolkalar
                  </label>
                  <label>
                    <Checkbox value={"Ko'ylak"} />
                    Ko'ylaklar
                  </label>
                  <label>
                    <Checkbox value={"Oyoq kiyim"} />
                    Oyoq kiyim
                  </label>
                </div>
              </AccordionDetails>
            </Accordion>
            <hr style={{ margin: "30px 0px" }} />
            <Accordion>
              <AccordionSummary
                style={{ margin: "20px 0 0 0px" }}
                expandIcon={<MdExpandLess />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                O'lcham
              </AccordionSummary>
              <AccordionDetails onChange={(e) => {
                if (!size.includes(e.target.value)) {
                  size.push(e.target.value);
                  setSize(size)
                } else {
                  const filter_category = size.filter((item) => {
                    return item != e.target.value
                  })
                  setSize(filter_category)
                }
              }}>

                <div className="filter-category">
                  <label>
                    <Checkbox value={"S dan XL gacah"} />
                    S dan Xl gacha
                  </label>
                  <label>
                    <Checkbox value={"M , L , XL"} />
                    M L XL
                  </label>
                  <label>
                    <Checkbox value={"39-44"} />
                    39-44
                  </label>
                </div>
              </AccordionDetails>
            </Accordion>
            <hr style={{ margin: "30px 0px" }} />
            <Accordion>
              <AccordionSummary
                style={{ margin: "20px 0 0 0px" }}
                expandIcon={<MdExpandLess />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Narx
              </AccordionSummary>
              <AccordionDetails>
                <div className="tel-box1">
                  <div style={{ margin: "0px 0px 15px 0px" }}>
                    <input value={`от ${value[0]}`} type="text" placeholder='от 300 000' />
                    <input value={`до ${value[1]}`} type="text" placeholder='до 103 300 000' />
                  </div>
                </div>

                <Box sx={{ width: 270, }}>
                  <Slider style={{ width: "270px  " }}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    min={10000}
                    max={300000}
                    getAriaValueText={valuetext}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
            <button onClick={filtered} className='filte-btn'>Filterlash</button>
          </div>
          <div className="filter_right">
            <div className="filter-right-box">
              {productData.length > 0 ? productData?.map((item) => {
                return (<Product item={item} />)
              }) : <p className='nothin-massage'>Hech qanday ma'lumot yo'q</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter