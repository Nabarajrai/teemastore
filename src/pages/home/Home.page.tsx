import { useEffect, useState } from "react";
import Layout from "../../common/layout/Layout";
import HomeBannerComponent from "../../components/homeBanner/HomeBanner.component";
import CategoryComponent from "../../components/category/Category.component";
import { fetchAllProuducts } from "../../services/api";
import ButtonComponent from "../../components/button/Button.component";
import { BUTTON_TYPES } from "../../common/layout/ButtonTypes";
import DeliveryComponent from "../../components/delivery/Delivery.component";
import truck from "../../assets/images/truck.png";
import home from "../../assets/images/home.png";
import time from "../../assets/images/time.png";
import kids from "../../assets/images/kids.png";

const deliveryIfno = [
  {
    id: 1,
    title: "FREE US DELIVERY",
    description:
      "Free shipping to First-Time customers only, U.S Customers or Order over $200 ",
    img: `${truck}`,
  },
  {
    id: 2,
    title: "CREDIT CARD",
    description:
      "Free We accept Carte Blanche, Master Card, Visa and American Express ",
    img: `${home}`,
  },
  {
    id: 3,
    title: "30 DAYS RETURN",
    description: "Exchanges are allowed within 30 days of your purchase date ",
    img: `${time}`,
  },
];

const HomePage = () => {
  const [categorys, setCategorys] = useState([]);
  const category = async () => {
    const response = await fetchAllProuducts();
    setCategorys(response.data);
  };
  useEffect(() => {
    category();
  }, []);
  return (
    <Layout>
      <div className="banner-section">
        <HomeBannerComponent />
      </div>
      <div className="categories">
        <div className="wrapper">
          <h2 className="category-title">Shop by category</h2>
          <div className="category-list">
            {categorys.map((category, i) => (
              <CategoryComponent key={i} name={category} />
            ))}
          </div>
        </div>
      </div>
      <div className="dellivery-section">
        <div className="wrapper">
          <div className="delivery-card">
            {deliveryIfno.map(delivery => (
              <DeliveryComponent
                key={delivery.id}
                title={delivery.title}
                description={delivery.description}
                img={delivery.img}
              />
            ))}
          </div>
          <div className="delivery-description">
            <div className="delivery-background">
              <img src={kids} alt="kids" />
            </div>
            <div className="deliery-cta">
              <ButtonComponent buttonType={BUTTON_TYPES.normal}>
                Kids tees
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
