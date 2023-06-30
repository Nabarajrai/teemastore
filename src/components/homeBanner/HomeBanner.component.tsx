import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import img from "../../assets/images/1.png";
import img1 from "../../assets/images/2.png";
import img2 from "../../assets/images/3.png";

const HomeBannerComponent = () => {
  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="myswiper"
      >
        <SwiperSlide>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="wrapper">
              <div className="banner-content">
                <div className="banner-content__title">
                  <h1>
                    <span>Special colletion</span> Get Evaluations
                  </h1>
                </div>
                <div className="banner-content__des">
                  <p>Design by and sold by Teeme</p>
                </div>
                <div className="banner-content__btn">
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="wrapper">
              <div className="banner-content">
                <div className="banner-content__title">
                  <h1>
                    <span>Mens collections</span> Get Evaluations
                  </h1>
                </div>
                <div className="banner-content__des">
                  <p>Design by and sold </p>
                </div>
                <div className="banner-content__btn">
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="wrapper">
              <div className="banner-content">
                <div className="banner-content__title">
                  <h1>
                    <span>Special colletion</span> Get Evaluations
                  </h1>
                </div>
                <div className="banner-content__des">
                  <p>Design by and sold by Teeme</p>
                </div>
                <div className="banner-content__btn">
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBannerComponent;
