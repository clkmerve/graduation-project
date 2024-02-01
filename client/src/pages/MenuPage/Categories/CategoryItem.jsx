import PropTypes from "prop-types";
import "./CategoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ category, categories }) => {
  return (
    <li className="category-item">
      {categories.map((categoryItem) => {
        if (categoryItem._id === category._id) {
          return (
            <Link to={`/${category.link}/${category._id}`}>
              <img src={category.img} alt="" className="category-image" />
              <span className="category-title">{category.name}</span>
            </Link>
          );
        }
      })}
    </li>
  );
};

export default CategoryItem;
CategoryItem.propTypes = {
  category: PropTypes.object,
};
