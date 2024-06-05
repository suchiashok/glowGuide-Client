import "./HomePage.scss";
import Header from "../Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home_hero"
          src="src/assets/images/hero.jpg"
          alt="hero"
        ></img>
      </div>
    </>
  );
}

export default HomePage;
