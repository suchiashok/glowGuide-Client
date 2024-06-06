import "./HomePage.scss";
import Header from "../Header/Header";
import SwiperComp from "../../components/SwiperComp/SwiperComp";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__hero">
          <div className="home__swiper">
            <SwiperComp />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
