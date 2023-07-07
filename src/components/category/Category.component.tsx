/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

import img from "../../assets/images/5.jpg";
type categoryProps = {
  name: string;
};
const CategoryComponent = ({ name }: categoryProps) => {
  return (
    <div className="category-container">
      <div className="category-continer__image">
        <img src={img} alt="img" />
      </div>
      <div className="category-container__des">
        <p>{name}</p>
        <span>523 Products</span>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(CategoryComponent);
