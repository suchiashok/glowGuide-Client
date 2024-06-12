import "./SearchProductsPage.scss";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import categoryIcon from "../../assets/icons/skincare.png";
import rightArrow from "../../assets/icons/right-arrow.png";
import heart from "../../assets/icons/heart.svg";

function SearchProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/products`);
      const shuffleProducts = res.data.sort(() => Math.random() - 0.5);
      setProducts(shuffleProducts);
    } catch (error) {
      console.log("Something went wrong!" + error);
    }
  };

  const getProductsByCategory = async (category) => {
    try {
      const res = await axios.get(`${baseUrl}/products/category/${category}`);
      const shuffleProducts = res.data.sort(() => Math.random() - 0.5);
      setProducts(shuffleProducts);
    } catch (error) {
      console.log("Something went wrong!" + error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      getAllProducts();
      navigate("/products");
    } else {
      getProductsByCategory(category);
      navigate(`/products/category/${category}`);
    }
  };

  const handleProductSelect = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <HeaderWhite />
      <main className="main">
        <h4 className="categories__buttonsLabel">Explore by Categories</h4>
        <div className="categories">
          <button
            className={`categories__button ${
              selectedCategory === "all" && "selected"
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>
          <button
            className={`categories__button ${
              selectedCategory === "Toner" && "selected"
            }`}
            onClick={() => handleCategoryChange("Toner")}
          >
            Toner
          </button>
          <button
            className={`categories__button ${
              selectedCategory === "Serum" && "selected"
            }`}
            onClick={() => handleCategoryChange("Serum")}
          >
            Serum
          </button>
          <button
            className={`categories__button ${
              selectedCategory === "Moisturizer" && "selected"
            }`}
            onClick={() => handleCategoryChange("Moisturizer")}
          >
            Moisturizer
          </button>
          <button
            className={`categories__button ${
              selectedCategory === "Sunscreen" && "selected"
            }`}
            onClick={() => handleCategoryChange("Sunscreen")}
          >
            Sunscreen
          </button>
        </div>
        <section className="cardsAndAboutEl">
          {selectedCategory === "all" && (
            <div className="aboutContainer">
              <div className="aboutContainer__content">
                <h4 className="aboutContainer__title">
                  Explore Top Products in the Market with glowGuide
                </h4>
                <p className="aboutContainer__para">
                  Welcome to glowGuide, your trusted resource for discovering
                  the top skincare products available today. Our platform offers
                  comprehensive information and expert insights on a wide range
                  of beauty essentials, from hydrating moisturizers to powerful
                  serums and protective sunscreens.
                  <br />
                  <br />
                  Whether you're a seasoned skincare aficionado or embarking on
                  your skincare journey, glowGuide is here to help you navigate
                  the best options tailored to your needs. Dive into our
                  detailed reviews and guides to find the perfect products that
                  will elevate your skincare routine and help you achieve a
                  radiant, healthy complexion.
                </p>
              </div>
              <div className="aboutContainer__content">
                <h4 className="aboutContainer__title">
                  Why Skincare is Essential
                </h4>
                <p className="aboutContainer__para">
                  Skincare is not just about aesthetics; it's a vital component
                  of overall health and well-being. As the body's largest organ,
                  the skin serves as a crucial barrier against environmental
                  aggressors such as pollution, UV radiation, and harsh weather
                  conditions. A consistent skincare routine strengthens this
                  barrier, ensuring your skin remains resilient, hydrated, and
                  protected.
                  <br />
                  <br />
                  Effective skincare practices can prevent premature aging,
                  reduce the risk of skin conditions, and enhance your natural
                  beauty. Moreover, dedicating time to skincare is an act of
                  self-care, fostering mental wellness by allowing you to
                  connect with and care for yourself. Prioritizing skincare
                  today paves the way for a healthier, more luminous complexion
                  in the future.
                </p>
              </div>
            </div>
          )}
          {selectedCategory === "Toner" && (
            <div className="aboutContainer">
              <div className="aboutContainer__content">
                <h4 className="aboutContainer__title">
                  Why Toner is Essential for Your Skincare Routine
                </h4>
                <p className="aboutContainer__para">
                  Unlock the secret to a flawless complexion with the power of
                  toner. Often the unsung hero of skincare, toner plays a
                  pivotal role in purifying, balancing, and revitalizing your
                  skin. It sweeps away lingering impurities and excess oil,
                  ensuring your skin is perfectly prepped to absorb the goodness
                  of your serums and moisturizers.
                  <br />
                  <br />
                  More than just a cleanser's sidekick, toner helps maintain
                  your skin's optimal pH balance, tightens pores, and delivers a
                  burst of hydration. Incorporate toner into your daily regimen
                  and experience the transformative effects on your skin's
                  texture and clarity.
                  <br />
                  <br />
                  Elevate your skincare game with glowGuide's expert-picked
                  toners, designed to give you that enviable, healthy glow.
                </p>
              </div>
            </div>
          )}
          {selectedCategory === "Serum" && (
            <div className="aboutContainer">
              <div className="aboutContainer__content">
                <h4 className="aboutContainer__title">The Power of Serum</h4>
                <p className="aboutContainer__para">
                  Transform your skincare routine with the magic of serums, the
                  powerhouse of potent ingredients designed to target specific
                  skin concerns. Serums penetrate deep into the skin, delivering
                  concentrated doses of vitamins, antioxidants, and essential
                  nutrients where they're needed most. Whether you're combating
                  fine lines, uneven skin tone, or hydration issues, there's a
                  serum tailored for you.
                  <br />
                  <br />
                  These lightweight elixirs work wonders in boosting collagen
                  production, enhancing skin elasticity, and providing a
                  radiant, youthful glow. Make serums a staple in your daily
                  regimen and let glowGuide's expert recommendations help you
                  achieve your best skin ever.
                  <br />
                  <br />
                  Unleash the true potential of your skincare with the
                  transformative effects of serums.
                </p>
              </div>
            </div>
          )}
          {selectedCategory === "Moisturizer" && (
            <div className="aboutContainer">
              <div className="aboutContainer__content">
                <h4 className="aboutContainer__title">
                  Embrace Hydration: The Vital Role of Moisturizer
                </h4>
                <p className="aboutContainer__para">
                  Hydration is the key to a healthy, radiant complexion, and
                  your moisturizer is the ultimate hydration hero. More than
                  just a skincare staple, moisturizer seals in moisture,
                  replenishes vital nutrients, and fortifies your skin's natural
                  barrier. From lightweight lotions to rich creams, there's a
                  moisturizer suited for every skin type and concern.
                  <br />
                  <br />
                  Nourish your skin with a surge of hydration, banish dryness,
                  and restore suppleness for a soft, smooth complexion. Elevate
                  your skincare ritual with glowGuide's curated selection of
                  moisturizers, crafted to quench your skin's thirst and unveil
                  its luminous beauty.
                  <br />
                  <br />
                  Experience the transformative power of moisturizer and embrace
                  radiant, healthy skin every day.
                </p>
              </div>
            </div>
          )}
          {selectedCategory === "Sunscreen" && (
            <div className="aboutContainer">
              <div className="aboutContainer__content">
                <h4 className="aboutContainer__title">
                  Sunscreen: Your Shield Against Sun Damage
                </h4>
                <p className="aboutContainer__para">
                  Protecting your skin from harmful UV rays is non-negotiable,
                  and sunscreen is your ultimate defense. More than just a
                  summertime essential, sunscreen is a year-round necessity to
                  prevent premature aging, sunburns, and skin cancer. Shield
                  your skin from the sun's damaging effects with a
                  broad-spectrum sunscreen that blocks both UVA and UVB rays.
                  <br />
                  <br />
                  Lightweight and non-greasy formulas make daily application a
                  breeze, ensuring your skin stays protected without clogging
                  pores or leaving a white cast. Embrace sun-kissed adventures
                  with confidence, knowing glowGuide's curated collection of
                  sunscreens has you covered.
                  <br />
                  <br />
                  Make sunscreen a non-negotiable step in your skincare routine
                  and safeguard your skin's health for years to come.
                </p>
              </div>
            </div>
          )}
          <div className="container">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="card__content">
                  <p className="card__nameValue">{product.product_name}</p>
                </div>
                <div className="card__content">
                  <p className="card__brandValue">{product.brand}</p>
                </div>
                {selectedCategory === "all" ? (
                  <div className="card__categoryContent">
                    <img
                      className="card__categoryIcon"
                      src={categoryIcon}
                      alt="categoryIcon"
                    ></img>
                    <p className="card__categoryValue">{product.category}</p>
                  </div>
                ) : null}
                {/* <img className="card__heart" src={heart} alt="heart-icon"></img> */}
                <div className="card__buttonEl">
                  <button
                    className="card__button"
                    onClick={() => handleProductSelect(product.id)}
                  >
                    KNOW MORE
                  </button>
                  <img
                    className="card__buttonIcon"
                    src={rightArrow}
                    alt="right-arrow"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default SearchProductsPage;
