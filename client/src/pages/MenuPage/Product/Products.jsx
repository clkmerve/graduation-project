import ProductItem from "./ProductItem";
import "./Products.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { message } from "antd";



function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"><ArrowForwardIosIcon/></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"><ArrowBackIosIcon/></i>
    </button>
  );
}

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetctProducts = async () => {
      try {
        const response = await fetch (`http://localhost:5000/api/products`);
          if (response.ok) {
              const data = await response.json();  
              setProducts(data);
            }else{
            message.error("Veri Getirme Başarısız")
          }            
      } catch (error) {
        console.log("Veri hatası:",error);
      }
      
    };
    fetctProducts();
    
  },[`http://localhost:5000`])

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Öne Çıkan Ürünler</h2>
        </div>
        <div className="product-wrapper product-carousel">
           <Slider {...sliderSettings}>
            {products.map((product) => (
               <ProductItem productItem={product} key={product._id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;