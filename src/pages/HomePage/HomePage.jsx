import "./HomePage.scss";
import Header from "../Header/Header";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider"

function HomePage() {
  return (
    <>
      <Header />
      <div className="home overlay">
        <img
          className="home_hero"
          src="src/assets/images/hero.jpg"
          alt="hero"
        ></img>
        <SwiperSlider />
      </div>
    </>
  );
}

export default HomePage;
