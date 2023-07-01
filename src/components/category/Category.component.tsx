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

export default memo(CategoryComponent);
