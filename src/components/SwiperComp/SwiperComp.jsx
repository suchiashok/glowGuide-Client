import "./SwiperComp.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function SwiperComp() {
  return (
    <div className="container">
      <h1 className="container__title">Discover Your Ultimate Glow Journey!</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.8}
        spaceBetween={-20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: "container__swiperPagination", clickable: true }}
        navigation={{
          nextEl: "container__swiperButtonNext",
          prevEl: "container__swiperButtonPrev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="container__swiperCon"
      >
        <SwiperSlide className="container__swiperEach">
          <Link className="container__links" to="/userProducts">
            <div className="container__swiperContent">
              <h4 className="container__swiperTitle">Your Products -</h4>
              <p className="container__swiperPara">
                View and update your Collection
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="container__swiperEach">
          <Link className="container__links" to="/products">
            <div className="container__swiperContent">
              <h4 className="container__swiperTitle">Find Your Favorites -</h4>
              <p className="container__swiperPara">
                Delve into a treasure trove of top-rated skincare essentials
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="container__swiperEach">
          <Link className="container__links" to="/routine">
            <div className="container__swiperContent">
              <h4 className="container__swiperTitle">Today's Routine -</h4>
              <p className="container__swiperPara">
                Your personalized morning and night skincare rituals
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="container__swiperEach">
          <div className="container__swiperContent">
            <h4 className="container__swiperTitle">Glow Goals Wishlist -</h4>
            <p className="container__swiperPara">
              Capture your skincare dreams
            </p>
          </div>
        </SwiperSlide>
        {/* <div className="container__sliderController">
          <div className="container__swiperButtonPrev container__sliderArrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="container__swiperButtonNext container__sliderArrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="container__swiperPagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default SwiperComp;
