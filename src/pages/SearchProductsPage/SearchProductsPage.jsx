import "./SearchProductsPage.scss";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";
import React, { useState, useEffect } from "react";
import axios from "axios";
import categoryIcon from "../../assets/icons/skincare.png";
import rightArrow from "../../assets/icons/right-arrow.png";

function SearchProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

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

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <HeaderWhite />
      <main className="main">
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
          <button className={`categories__button ${
            selectedCategory === "Sunscreen" && "selected"
          }`}
          onClick={() => handleCategoryChange("Sunscreen")}>Sunscreen</button>
        </div>
        <div className="container">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="card__content">
                <p className="card__nameValue">{product.product_name}</p>
              </div>
              <div className="card__content">
                <p className="card__brandValue">{product.brand}</p>
              </div>
              <div className="card__last">
                <div className="card__categoryContent">
                  <img
                    className="card__categoryIcon"
                    src={categoryIcon}
                    alt="categoryIcon"
                  ></img>
                  <p className="card__categoryValue">{product.category}</p>
                </div>
                <div className="card__buttonEl">
                  <button className="card__button">VIEW MORE</button>
                  <img
                    className="card__buttonIcon"
                    src={rightArrow}
                    alt="right-arrow"
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default SearchProductsPage;
