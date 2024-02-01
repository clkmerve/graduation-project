import "./CampaignItem.css";
import CoffeeIcon from '@mui/icons-material/Coffee';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CookieIcon from '@mui/icons-material/Cookie';
import CakeIcon from '@mui/icons-material/Cake';
import IcecreamIcon from '@mui/icons-material/Icecream';
import FlatwareIcon from '@mui/icons-material/Flatware';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom"; 

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
      KAHVE İÇELİM..  <br />
       <CoffeeIcon/> <CoffeeMakerIcon/><EmojiFoodBeverageIcon/><CookieIcon/><CakeIcon/><IcecreamIcon/><FlatwareIcon/><br />
      
      </h3>
      <p className="campaign-desc">
      Lezzetin Anahtarı:Kahve Kalitesi
      </p>
      <Link to="/sepet"><a href=" #" className="btn btn-primary">
        <ArrowRightAltIcon/>
        <i className="bi bi-arrow-right"></i>
      </a>
      </Link>
    </div>
  );
};

export default CampaignItem;