import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log("Something went wrong" + error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  if (!product) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{product.product_name}</h1>
      </div>
    </div>
  );
}

export default ProductDetails;
