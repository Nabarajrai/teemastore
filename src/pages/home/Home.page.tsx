import Layout from "../../common/layout/Layout";
import HomeBannerComponent from "../../components/homeBanner/HomeBanner.component";

const HomePage = () => {
  return (
    <Layout>
      <div className="banner-section">
        <HomeBannerComponent />
      </div>
      <div className="wrapper">
        <div style={{ height: "27vh" }}>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            temporibus esse velit blanditiis inventore praesentium soluta neque
            qui illum. Aut a quaerat accusantium veniam neque mollitia repellat
            deleniti saepe voluptate!
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
