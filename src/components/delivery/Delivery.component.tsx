import { AiOutlineRight } from "react-icons/ai";

interface delivery {
  title: string;
  description: string;
  img: string;
}

const DeliveryComponent = ({ title, description, img }: delivery) => {
  return (
    <div className="delivery-container">
      <div className="delivery-content">
        <div className="delivery-content__image">
          <img src={img} alt="truck" />
        </div>
        <div className="delivery-content__des">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" className="delivery-content__des--cta">
            <span>Learn more</span>
            <div className="icons">
              <AiOutlineRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeliveryComponent;
