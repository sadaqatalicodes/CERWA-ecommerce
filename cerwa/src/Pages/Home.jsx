import React from 'react'
import Deals from '../Components/Deals'
import Carousels from '../Components/Carousels'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import LastDeals from '../Components/LastDeals'
import TechNews from '../Components/TechNews'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Carousels/>
    <Deals/>
    <Products/>
    <NewsLetter/>
    <LastDeals/>
    <TechNews/>
    <Footer/>
    </>
  )
}

export default Home