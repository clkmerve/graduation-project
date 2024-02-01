import React from 'react';
import './Middle.css';

const Middle=()=> {
   return <div className='middle section'> 
       <div className="secContainer container">
        <div className="grid">
            <span className="flex">
                <h1>3</h1>
                <p>Yıllık Deneyim</p>
            </span>

            <span className="flex">
                <h1>25+</h1>
                <p>Kahve Çeşidi</p>
            </span>

            <span className="flex">
                <h1>10K+</h1>
                <p>Müşteri</p>
            </span>

             <span className="flex">
                <h1>4.3</h1>
                <p>Ortalama Kahve Değerlendirmesi</p>
            </span> 
        </div>
       </div>
   </div>
};

export default Middle;
