import React from 'react';
import './Footer.css'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer=()=> {
   return (
  <div className='footer'>
      <div className="secContainer container grid">
       <div className="logoDiv grid">
            
            <div className="footerLogo flex">
               <h2>KAHVE İÇELİM
                  <p>Bizi Takip Edin!<TagFacesIcon className='icon'/></p>
               </h2>
             
        
     
        <div className="socials flex">
            <InstagramIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <YouTubeIcon className='icon'/>
         </div>   
         
         </div>  


         <div className="footerLinks ">
            <span className="linkTitle">Bilgi</span>
          <Link to='/hakkimizda'> <li><a href=" #">Hakkımızda</a></li></Link> 
          <Link to='/menu'> <li><a href=" #">Menü</a></li></Link> 
          <Link to='/sepet'> <li><a href=" #">Sepet</a></li></Link> 
         </div>

         <div className="footerLinks">
            <span className="linkTitle">Bize Ulaşın</span>
            <Link to='/iletisim'> <li> <a href=" #">Destek</a> </li></Link> 
            <Link to='/iletisim'> <li> <a href=" #">Önerileriniz</a></li></Link> 
            <Link to='/iletisim'>  <li> <a href=" #">Mağazalarımız</a> </li></Link>
         </div>

         <div className="footerLinks">
            <span className="linkTitle">İletişim </span>
            <span className="phone">+90 505 101 23 45</span>
            <span className="email">kahveicelim11@gmail.com</span>
         </div>

      </div>
    </div>
   </div>
   );
};

export default Footer;
