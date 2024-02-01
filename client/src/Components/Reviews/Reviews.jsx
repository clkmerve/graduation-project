import React from 'react';
import './Reviews.css'
import StarIcon from '@mui/icons-material/Star';
//import StarBorderIcon from '@mui/icons-material/StarBorder';
import image from '../../React-Proje-foto1/foto10.jpg'
import image1 from '../../React-Proje-foto1/foto14.jpg'
import image2 from '../../React-Proje-foto1/foto2.jpg'
import image3 from '../../React-Proje-foto1/foto4.jpg'
import image5 from '../../React-Proje-foto1/foto3.jpg'

const Reviews=()=> {
   return <div className='reviews section container'> 
    <div className="secContainer flex">
        <div className="textDiv">
          
            <span className="redText">MÜŞTERİLERİMİZİN TERCİHİ</span>
            <h2>Müşterilerimizden Gerçek Kahve Deneyimi</h2>
            <span>İşte bu ayki en çok tercih edilen Kahvelerimiz!</span>
      
            <span className="stars flex">
               <StarIcon className='icon'/>
               <StarIcon className='icon'/>
               <StarIcon className='icon'/>
               <StarIcon className='icon'/>
               <StarIcon className='icon'/>
            </span>
       
            <div className="clientsImages flex">
                <img src={image} alt="ClientImage" />
                <img src={image1} alt="ClientImage" />
                <img src={image2} alt="ClientImage" />
                <img src={image3} alt="ClientImage" />

            </div>
        </div>

        <div className="imgDiv">
            <img src={image5} alt="DivImage" />
        </div>
    </div> 
   </div>
};

export default Reviews;