import BrandItem from "./BrandItem";
import "./Brands.css";

const Brands = () => {
  return (
    <section className="brands grid">
      <div className="container">
        <ul className="brand-list">
          <BrandItem />
          
        </ul>
      </div>
    </section>
  );
};

export default Brands;