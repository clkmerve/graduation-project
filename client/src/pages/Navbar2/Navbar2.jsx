import { useContext, useState } from 'react';
import './Navbar2.css'
import CoffeeIcon from '@mui/icons-material/Coffee';
import CancelIcon from '@mui/icons-material/Cancel';
import AppsIcon from '@mui/icons-material/Apps';
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { CartContext } from '../../context/CartProvider';
import LogoutIcon from '@mui/icons-material/Logout';



const Navbar2=({ setIsSearchShow })=> {
  const { cartItems, clearCart } = useContext(CartContext);
  const user = localStorage.getItem("user");


 //navbarın yukardan gelmesi için 
   const[navBar2, setNavBar2] = useState("menu");

// show navbar için fonksiyon
    const showNavBar2 = () =>{
        setNavBar2("menu showNavbar");
    }
  
 // remove navbar için fonk
    const removeNavBar2 = () =>{
        setNavBar2("menu");
    }

    const handleLogout = () => {
      if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
        localStorage.removeItem('user');
        clearCart(); // Sepeti temizle
        window.location.href = '/';
      }
    };

   return (
   <div className='navBar2'>
    <div className="logoDiv">
    <CoffeeIcon className="iconCoffee" />
    <span> Kahve İçelim</span>

    
        

    </div>
    <div className={navBar2}>
        <ul >
          <Link to={"/"}> <li className='navList'>Ana Sayfa</li></Link>
          <Link to={"/menu"}> <li className='navList'>Menü</li></Link>
          {/* <Link to={"/sepet"}> <li className='navList'>Sepet</li></Link> */}
          <Link to={"/hakkimizda"}> <li className='navList'>Hakkımızda</li></Link>
          <Link to={"/iletisim"}> <li className='navList'>İletişim</li></Link>
        </ul>
        <CancelIcon className='icon closeIcon' 
        onClick={removeNavBar2}/>
    </div>

   
<div className="ikonik ">
     <ul>
        <Link to={"/giris"}> <PersonOutlineIcon className=''/> </Link>
        <button className='search-button'  
         onClick={() => setIsSearchShow(true)} >
          <SearchIcon />
         </button>
          
         <Link to={"/sepet"}><AddShoppingCartIcon/>{cartItems.length}</Link>
     
    </ul>
    {user && (
        <button
          className="search-button"
          onClick={() => {
            if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
              localStorage.removeItem("user");
              clearCart(); // Çıkış yapılırken sepeti temizle
              window.location.href = "/";
            }
          }}
        >
          <i><LogoutIcon /></i>
        </button>
      )}
    </div>
    


    <AppsIcon className='icon menuIcon' onClick={showNavBar2}/>
   </div>
   )
};

export default Navbar2;


