import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import addProduct from "../../assets/icons/addProduct.png";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [userProduct, setUserProduct] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log("Something went wrong" + error);
    }
  };

  const postUserProducts = async () => {
    try {
      const data = {
        productId: id,
        openDate: null,
        expirationMonths: null,
      };
      const response = await axios.post(`${baseUrl}/userProducts`, data);
      setUserProduct(response.data);
    } catch (error) {
      console.log("Something went wrong!" + error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  if (!product) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header />
      <section class="indProduct">
        <button className="indProduct__button" onClick={postUserProducts}>
          Got this? Add to your Collection!
          <img
            className="indProduct__buttonIcon"
            src={addProduct}
            alt="addIcon"
          ></img>
        </button>
        <div className="indProduct__section1">
          <div class="indProduct__container">
            <div className="indProduct__indContainer">
              <p className="indProduct__label">Product:</p>
              <h1>{product.product_name}</h1>
            </div>
            <div className="indProduct__indContainer">
              <p className="indProduct__label">Brand:</p>
              <p className="indProduct__content">{product.brand}</p>
            </div>
            <div className="indProduct__indContainer">
              <p className="indProduct__label">Description:</p>
              <p className="indProduct__content">{product.description}</p>
            </div>
            <div className="indProduct__indContainer">
              <p className="indProduct__label">Size Options:</p>
              <div className="indProduct__sizes">
                <p className="indProduct__sizeEl">{product.size_small}</p>
                <p className="indProduct__sizeEl">{product.size_medium}</p>
                <p className="indProduct__sizeEl">{product.size_large}</p>
                <p className="indProduct__sizeEl">{product.size_standard}</p>
              </div>
            </div>
          </div>
          <div class="indProduct__categoryImage">
            {product.category === "Moisturizer" && (
              <div className="indProduct__Moisturizer">
                <div className="indProduct__rotateLabel">
                  <h3 className="indProduct__categoryLabel">MOISTURIZER</h3>
                </div>
              </div>
            )}
            {product.category === "Toner" && (
              <div className="indProduct__Toner">
                <div className="indProduct__rotateLabel">
                  <h3 className="indProduct__categoryLabel">TONER</h3>
                </div>
              </div>
            )}
            {product.category === "Serum" && (
              <div className="indProduct__Serum">
                <div className="indProduct__rotateLabel">
                  <h3 className="indProduct__categoryLabel">SERUM</h3>
                </div>
              </div>
            )}
            {product.category === "Sunscreen" && (
              <div className="indProduct__Sunscreen">
                <div className="indProduct__rotateLabel">
                  <h3 className="indProduct__categoryLabel">SUNSCREEN</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="buyNow">
        <div className="buyNow__title">
          <h4>Wanna add to your collection? Buy Now!</h4>
        </div>
        <div className="buyNow__buttons">
          <a href={product.sephora} target="_blank" rel="noopener noreferrer">
            <button className="buyNow__sephora"></button>
          </a>
          <div className="buyNow__divider"></div>
          <a
            href={product.brand_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="buyNow__brand">
              {product.brand.toUpperCase()}
            </button>
          </a>
        </div>
      </section>
      <section className="sizesEl">
        <div className="sizesEl__container">
          <div className="sizesEl__text">
            <h4 className="sizesEl__sizeTitle">
              Discover Your Perfect Size Match!
            </h4>
            <p className="sizesEl__sizeContent">
              Here's a quick guide to help you find the ideal size for your
              skincare essentials.
            </p>
            <p className="sizesEl__subHeading">Small</p>
            <p className="sizesEl__sizeContent">
              For those seeking a compact option, consider the Small (S) size,
              <br />
              typically ranging from 0.5oz to 2oz (15ml to 60ml), <br />
              perfect for individuals who prefer to switch up their products
              frequently or those who travel often.
            </p>
            <p className="sizesEl__subHeading">Medium</p>
            <p className="sizesEl__sizeContent">
              If you're looking for a bit more product to last you a while, the
              Medium (M) size,
              <br /> which usually falls between 2oz to 6oz (60ml to 180ml),{" "}
              <br /> might be just right for daily use over several weeks.
            </p>
            <p className="sizesEl__subHeading">Large</p>
            <p className="sizesEl__sizeContent">
              For those who want to stock up and ensure they don't run out too
              soon, the Large (L) size, generally ranging from 6oz to 12oz
              (180ml to 360ml), offers plenty of product to go around and is
              suitable for those who use skincare consistently.
            </p>
            <p className="sizesEl__subHeading">Standard</p>
            <p className="sizesEl__sizeContent">
              And if you prefer the standard options, <br /> look for sizes
              between 1oz to 3.4oz (30ml to 100ml), <br /> providing a balance
              between value and convenience for regular use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
