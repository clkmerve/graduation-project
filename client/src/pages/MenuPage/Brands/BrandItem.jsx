import image from '../../../React-Proje-foto1/foto10.jpg'
import image1 from '../../../React-Proje-foto1/foto12.jpg'
import image2 from '../../../React-Proje-foto1/foto30.jpg'


const BrandItem = () => {
    return (
      <ul className="brand-item">
        <li><img src={image} alt="" /></li>
        <li><img src={image1} alt="" /></li>
       <li><img src={image2} alt="" /></li>
      </ul>
    );
  };
  
  export default BrandItem;