import ButtonComponent from "../button/Button.component";
import { BUTTON_TYPES } from "../../common/layout/ButtonTypes";

type cartProps = {
  products: productsTypes;
};

interface productsTypes {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: ratingTypes;
  title: string;
}

interface ratingTypes {
  rate?: number;
  cout?: number;
}

const CartComponent: React.FC<cartProps> = ({ products }) => {
  const { image, title, price, rating } = products;
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
            <span>{rating.rate} reviews</span>
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
