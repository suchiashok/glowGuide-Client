import "./SearchProductsPage.scss";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import categoryIcon from "../../assets/icons/skincare.png";
import rightArrow from "../../assets/icons/right-arrow.png";
import search from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";
import { TextField, Box } from "@mui/material";

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
      console.log(res);
      const shuffleProducts = res.data.sort(() => Math.random() - 0.5);
      setProducts(shuffleProducts);
      console.log(shuffleProducts);
    } catch (error) {
      console.log("Something went wrong!" + error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      getAllProducts();
    } else {
      getProductsByCategory(category);
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
        <div className="search">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "60ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="outlined-basic"
              label="Search for your skincare favorites here!"
              variant="outlined"
            />
          </Box>
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
                <img className="card__heart" src={heart} alt="heart-icon"></img>
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
