import { useEffect, useState } from "react";
import Layout from "../../common/layout/Layout";
import HomeBannerComponent from "../../components/homeBanner/HomeBanner.component";
import CategoryComponent from "../../components/category/Category.component";
import { fetchAllProuducts } from "../../services/api";

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
            {categorys.map(category => (
              <CategoryComponent name={category} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
