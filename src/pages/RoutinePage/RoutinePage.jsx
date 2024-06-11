import "./RoutinePage.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";

function RoutinePage() {
  const [userProduct, setUserProduct] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getUserProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userProducts`);
      setUserProduct(response.data);
    } catch (error) {
      console.error("Error fetching user products", error);
    }
  };

  useEffect(() => {
    getUserProducts();
  }, []);

  const getRandomProduct = (products) => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  };

  const getRandomProductByCategory = (category) => {
    const categoryProducts = userProduct.filter(
      (product) => product.product_category === category
    );
    return getRandomProduct(categoryProducts);
  };

  const morningMoisturizer = getRandomProductByCategory("Moisturizer");
  const morningSerum = getRandomProductByCategory("Serum");
  const morningToner = getRandomProductByCategory("Toner");
  const eveningMoisturizer = getRandomProductByCategory("Moisturizer");
  const eveningSerum = getRandomProductByCategory("Serum");
  const eveningToner = getRandomProductByCategory("Toner");

  return (
    <>
      <HeaderWhite />
      <div className="routine">
        <div className="routine__morning">
          <div className="routine__prodCard">
            <p className="routine__title">Morning Routine</p>
            <div className="routine__prod">
              <p className="routine__prodLabel">Moisturizer:</p>
              {morningMoisturizer && (
                <p className="routine__prodContent">
                  {morningMoisturizer.product_name}
                </p>
              )}
            </div>
            <div className="routine__prod">
              <p className="routine__prodLabel">Serum:</p>
              {morningSerum && (
                <p className="routine__prodContent">
                  {morningSerum.product_name}
                </p>
              )}
            </div>
            <div className="routine__prod">
              <p className="routine__prodLabel">Toner:</p>
              {morningToner && (
                <p className="routine__prodContent">
                  {morningToner.product_name}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="routine__evening">
          <div className="routine__prodCard">
            <p className="routine__title">Night Routine</p>
            <div className="routine__prod">
              <p className="routine__prodLabel">Moisturizer:</p>
              {eveningMoisturizer && (
                <p className="routine__prodContent">
                  {eveningMoisturizer.product_name}
                </p>
              )}
            </div>
            <div className="routine__prod">
              <p className="routine__prodLabel">Serum:</p>
              {eveningSerum && (
                <p className="routine__prodContent">
                  {eveningSerum.product_name}
                </p>
              )}
            </div>
            <div className="routine__prod">
              <p className="routine__prodLabel">Toner:</p>
              {eveningToner && (
                <p className="routine__prodContent">
                  {eveningToner.product_name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoutinePage;
