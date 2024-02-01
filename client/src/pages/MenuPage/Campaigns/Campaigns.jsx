import CampaignItem from "./CampaignItem";
import CampaignItem1 from "./CampaignItem1";
import CampaignItem2 from "./CampaignItem2";
import CampaignItem3 from "./CampaignItem3";
import "./Campaigns.css"

const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaignItem />
          <CampaignItem1 />
        </div>
        <div className="campaigns-wrapper">
          <CampaignItem2 />
          <CampaignItem3 />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;