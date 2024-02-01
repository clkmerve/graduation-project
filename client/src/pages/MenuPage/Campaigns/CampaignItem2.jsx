import "./CampaignItem.css";
import {Link} from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CoffeeIcon from '@mui/icons-material/Coffee';

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
      Kahve Tutkunlarının  <br />
      Buluşma Noktası..
      </h3>
      
       <p className="campaign-desc">
       KAHVE İÇELİM <CoffeeIcon/>
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