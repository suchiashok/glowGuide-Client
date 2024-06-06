import "./SearchProductsPage.scss";
import Header from "../Header/Header";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function SearchProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/products`);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Something went wrong!" + error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card__name">
              <p className="card__title">PRODUCT NAME</p>
              <p className="card__value">{product.product_name}</p>
            </div>
            <div className="card__brand">
              <p className="card__title">BRAND</p>
              <p className="card__value">{product.brand}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchProductsPage;
