import "./UserProducts.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";

function UserProducts() {
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

  useEffect(() => {
    getUserProducts();
  }, []);

  if (userProduct === null || userProduct.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <>
      <HeaderWhite />
      <section className="userProducts">
        {userProduct.map((product) => (
          <div key={product.id} className="userProduct">
            <p>{product.product_name}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default UserProducts;
