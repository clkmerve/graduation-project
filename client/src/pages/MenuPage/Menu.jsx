import React from 'react'
import './Menu.css'
import Footer from '../../Components/Layout/Footer/Footer'
// import Navbar2 from '../Navbar2/Navbar2'
import Slider from './Slider/Slider'
import Categories from './Categories/Categories'
import Products from './Product/Products'
import Campaigns from './Campaigns/Campaigns'
import Brands from './Brands/Brands'
import CampaignSingle from './CompaignSingle/CampaignSingle'

const Menu = () => {
  
  return (
  <>
  {/* <Navbar2/> */}
  <Slider/>
  <Categories/>
  <CampaignSingle/>
  <Products/>
  <Campaigns/>
  <Brands/>
  
  <Footer/>
  </>
  )
}

export default Menu
