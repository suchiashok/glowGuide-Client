import "./UserProducts.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";

function UserProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userProduct, setUserProduct] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getUserProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userProducts`);
      setUserProduct(response.data);
    } catch (error) {
      console.log("Something went wrong" + error);
    }
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    getUserProducts();
  }, []);

  if (userProduct === null || userProduct.length === 0) {
    return <div>loading...</div>;
  }

  const filteredProducts =
    selectedCategory === "all"
      ? userProduct
      : userProduct.filter((product) => {
          return product.product_category === selectedCategory;
        });

  return (
    <>
      <HeaderWhite />
      <section className="userProducts">
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
        <div className="userProducts__prodContainer">
          {filteredProducts.map((product) => (
            <div key={product.id} className="userProducts__prodCard">
              <div className="userProducts__content">
                <p className="userProducts__subHeading">PRODUCT NAME</p>
                <p className="userProducts__value">
                  {product.product_name}
                </p>
              </div>
              <div className="userProducts__content">
                <p className="userProducts__subHeading">BRAND</p>
                <p className="userProducts__value">
                  {product.product_brand}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default UserProducts;
