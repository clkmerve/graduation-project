import React, { useState } from 'react';
import './Navbar.css'
import CoffeeIcon from '@mui/icons-material/Coffee';
import CancelIcon from '@mui/icons-material/Cancel';
import AppsIcon from '@mui/icons-material/Apps';
import {Link} from 'react-router-dom'


const Navbar=()=> {

 //navbarın yukardan gelmesi için 
   const[navBar, setNavBar] = useState("menu");

// show navbar için fonksiyon
    const showNavBar = () =>{
        setNavBar("menu showNavbar");
    }
  
 // remove navbar için fonk
    const removeNavBar = () =>{
        setNavBar("menu");
    }

   return (
   <div className='navBar'>
    <div className="logoDiv">
    <CoffeeIcon className="iconCoffee" />
    <span> Kahve içelim</span>

    </div>
    <div className={navBar}>
        <ul >
          <Link to={"/"}> <li className='navList'>Ana Sayfa</li></Link>
          <Link to={"/menu"}> <li className='navList'>Menü</li></Link>
          <Link to={"/sepet"}> <li className='navList'>Sepet</li></Link>
          <Link to={"/hakkimizda"}> <li className='navList'>Hakkımızda</li></Link>
          <Link to={"/iletisim"}> <li className='navList'>İletişim</li></Link>
        </ul>
        <CancelIcon className='icon closeIcon' 
        onClick={removeNavBar}/>
    </div>

    <div className='buton1'>
    <Link to={"/kayit"}><button className="signUpBtn btn">Üye ol</button></Link>
    <Link to={"/giris"}><button className="LogInBtn btn">Giriş yap</button></Link>
    </div>

    <AppsIcon className='icon menuIcon' onClick={showNavBar}/>
   </div>
   )
};

export default Navbar;
