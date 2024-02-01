import React from 'react';
import './Subscribe.css'
import image from '../../React-Proje-foto1/foto21.jpg';
import { Link } from 'react-router-dom';


const Subscribe=()=> {
   return <div className='subscribe section container'>
      <div className="secContainer grid">
         <img src={image} alt="DivImage" />

         <div className="textDiv">
            <h4>En iyi kahve deneyimi için KAHVE İÇELİM!</h4>
            <span>Kahve Tutkunlarının Buluşma Noktası: Biz!</span>
             <Link to='/menu'> <button className='btn'> Başlayın</button></Link> 
         </div>
      </div>
   </div>
};

export default Subscribe;
