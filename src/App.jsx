import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Card from './page/Card/Card'
import Filter from './page/Filter/Filter'

function App() {

  const [mainData, setMainData] = useState([])

  function getData() {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://apisecommerce.pythonanywhere.com/product/new/", requestOptions)
      .then((response) => response.json())
      .then((result) => setMainData(result))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header mainData={mainData} />} />
          <Route path='/card/:id' element={<Card mainData={mainData} />} />
          <Route path='/filter' element={<Filter mainData={mainData} />} />
        </Routes>
        <Footer />

      </BrowserRouter>
      {/* <Card /> */}
    </div>
  )
}

export default App