import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SliderItem = ({imageSrc}) => {
    return (
        
      <div className="slider-item fade">
        <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />         
        </div>
        <div className="container">
          <p className="slider-title">KAHVE İÇELİM 2024</p>
          <h2 className="slider-heading">%70 İndirim Fırsatı</h2>
        <Link to='/tum/ :id'> <a href=" #" className="betene">
            Şimdi Keşfet
          </a></Link> 
        </div>
      </div>
    );
  };
  
  export default SliderItem;

  SliderItem.propTypes = {
    imageSrc: PropTypes.string,
  };