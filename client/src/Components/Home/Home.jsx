import React from 'react';
import './Home.css'
import video from '../../React-Proje-foto1/video.mp4'
import image1 from '../../React-Proje-foto1/foto2.jpg'
import image2 from '../../React-Proje-foto1/foto11.jpg'
import image3 from '../../React-Proje-foto1/foto12.jpg'
import image4 from '../../React-Proje-foto1/foto15.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';


const Home=()=> {
   return <div className='Home'> 
   <div className="videoBg">
    <video src={video} autoPlay loop muted ></video>
   </div>

   <div className="sectionText">
    <h1>Unutamayacağınız bir kahve deneyimi için 
        doğru yerdesiniz!</h1>
    <p>
        Harika tatlarıyla tatlı ve kahve, romantik 
        ambiyansıyla KAHVE İÇELİM hizmetinizde.
    </p>
    <Link to="/menu">
        <button className='btn flex'>Haydi Başlayalım 
        <ArrowRightAltIcon className='icon'/></button>
    </Link>
   </div>

   <div className="popularPlaces">
    <div className="content">
        <h3>Popüler Kahvelerimiz</h3>
        <div className="images flex">
            <img src={image1} alt='DestinationImage'></img> 
            <img src={image2} alt='DestinationImage'></img>
            <img src={image3} alt='DestinationImage'></img>
            <img src={image4} alt='DestinationImage'></img> 

        </div>

    </div>
   </div>
   </div>
};

export default Home;
