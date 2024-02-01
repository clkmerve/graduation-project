import RevievForm from "./RevievsForm";
import RevievItem from "./RevievsItem";
import "./Revievs.css";
import PropTypes from "prop-types";


const Revievs = ({ active }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <RevievItem />
          <RevievItem />
          <RevievItem />
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <RevievForm />
      </div>
    </div>
  );
};

export default Revievs;

Revievs.propTypes = {
  active: PropTypes.string
}