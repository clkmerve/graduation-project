import { Link } from "react-router-dom"
import "./CampaignSingle.css"

const CampaignSingle = () => {
  return (
    <section className="campaign-single">
    <div className="container">
      <div className="campaign-wrapper">
        <h2>Kış İndirimleri</h2>
        <strong>%40 İndirim</strong>
        <span></span>
       <Link to="/tum/:id"><a href=" #" className="btn ">
           Sipariş Ver
          <i className="bi bi-arrow-right"></i>
        </a></Link> 
      </div>
    </div>
  </section>
  )
}

export default CampaignSingle