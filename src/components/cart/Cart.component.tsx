/* eslint-disable prefer-const */
import ButtonComponent from "../button/Button.component";
import { BUTTON_TYPES } from "../../common/layout/ButtonTypes";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

type cartProps = {
  products: productsTypes;
};

interface productsTypes {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const CartComponent: React.FC<cartProps> = ({ products }) => {
  const { image, title, price, rating } = products;
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span className="star-key" key={index}>
        {rating.rate >= index + 1 ? (
          <FaStar className="star" />
        ) : rating.rate >= number ? (
          <FaStarHalfAlt className="star" />
        ) : (
          <AiOutlineStar className="starfa" />
        )}
      </span>
    );
  });
  return (
    <div className="carts-container">
      <div className="carts">
        <div className="carts__image">
          <img src={image} alt={products.title} />
        </div>
        <div className="carts__des">
          <div className="carts__des--title">
            <h3>{title.slice(0, 30)}...</h3>
          </div>
          <div className="carts__des--rate">
            <div className="star-section"> {ratingStar}</div>
            <span style={{ marginLeft: "1rem" }}>{rating.count} reviews</span>
          </div>
          <div className="carts__des--price">
            <span>${price}</span>
          </div>
        </div>
        <div className="carts__button">
          <ButtonComponent buttonType={BUTTON_TYPES.inverted}>
            Qick add
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
