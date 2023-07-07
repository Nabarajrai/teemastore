import { useEffect, useState } from "react";
import Layout from "../../common/layout/Layout";
import HomeBannerComponent from "../../components/homeBanner/HomeBanner.component";
import CategoryComponent from "../../components/category/Category.component";
import { fetchAllProuducts } from "../../services/api";
import { getAllProducts } from "../../services/api";
import ButtonComponent from "../../components/button/Button.component";
import { BUTTON_TYPES } from "../../common/layout/ButtonTypes";
import DeliveryComponent from "../../components/delivery/Delivery.component";
import CartComponent from "../../components/cart/Cart.component";
import { LimitProducts } from "../../context/allProducts/Allproduct.context";
import SubscribeComponent from "../../components/subscribe/Subscribe.component";
import truck from "../../assets/images/truck.png";
import home from "../../assets/images/home.png";
import time from "../../assets/images/time.png";
import kids from "../../assets/images/kids.png";
import brand from "../../assets/images/brand.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";

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
  const [products, setProducts] = useState([]);
  const [number, setNumber] = useState<number>(8);

  const category = async () => {
    const response = await fetchAllProuducts();
    setCategorys(response.data);
  };

  const productes = async () => {
    const response = await getAllProducts(number);
    setProducts(response.data);
  };

  useEffect(() => {
    productes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    category();
  }, []);

  const length = LimitProducts();

  const handleLimit = () => {
    if (length == productes.length) {
      return;
    } else {
      setNumber(number + 8);
    }
  };

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
              <DeliveryComponent key={delivery.id} category={delivery} />
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
      <div className="customer-favorites">
        <div className="wrapper">
          <div className="cutomer-title">
            <h2>Customer Favorites</h2>
          </div>
          <div className="customer-cards">
            {products.map((product, i) => (
              <div key={i}>
                <CartComponent products={product} />
              </div>
            ))}
          </div>
          <div className="customer-loads">
            <div className="customer-loads__des">
              <p>
                Showing {products.length} of {length} products
              </p>
            </div>
            <div className="customer-loads__btn">
              <ButtonComponent
                buttonType={BUTTON_TYPES.normal}
                onClick={handleLimit}
              >
                Load more !
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      <div className="brands">
        <div className="wrapper">
          <div className="brands-title">
            <h3>Brands we love</h3>
          </div>
          <div className="brands-lists">
            <div className="brands-lists__img">
              <img src={brand} alt="" />
            </div>
            <div className="brands-lists__img">
              <img src={brand2} alt="" />
            </div>
            <div className="brands-lists__img">
              <img src={brand3} alt="" />
            </div>
            <div className="brands-lists__img">
              <img src={brand4} alt="" />
            </div>
            <div className="brands-lists__img">
              <img src={brand} alt="" />
            </div>
            <div className="brands-lists__img">
              <img src={brand2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="emails">
        <SubscribeComponent />
      </div>
    </Layout>
  );
};

export default HomePage;
