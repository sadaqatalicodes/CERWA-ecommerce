import React from 'react'
import Deals from '../Components/Deals'
import Carousels from '../Components/Carousels'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import LastDeals from '../Components/LastDeals'
import TechNews from '../Components/TechNews'
import Footer from '../Components/Footer'
import TopNav from '../Components/TopNav'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
    <TopNav/>
    <Navbar/>
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