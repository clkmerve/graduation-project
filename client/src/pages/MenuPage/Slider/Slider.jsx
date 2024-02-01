import { useState } from "react";
import SliderItem from "./SliderItem";
import "./Slider.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image from '../../../React-Proje-foto1/foto1.jpg';
import image1 from '../../../React-Proje-foto1/foto42.jpg';
import image2 from '../../../React-Proje-foto1/foto37.jpg';


const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };
  return (
    <section className="slider">
      <div className="slider-elements">
      {currentSlide === 0 && <SliderItem imageSrc={image} />}
        {currentSlide === 1 && <SliderItem imageSrc={image1} />}
        {currentSlide === 2 && <SliderItem imageSrc={image2} />}


        <div className="slider-buttons">
        <button onClick={prevSlide}>
          <i className="bi bi-chevron-right"><ArrowBackIosIcon/> </i>       
        </button>
         
         <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"><ArrowForwardIosIcon/> </i>
          </button>
        </div>
        
        <div className="slider-dots">
        <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => setCurrentSlide(1)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => setCurrentSlide(2)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sliders;