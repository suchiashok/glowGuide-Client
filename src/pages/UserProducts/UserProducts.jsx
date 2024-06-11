import "./UserProducts.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";
import { format, parseISO, isValid } from "date-fns";
import Delete from "../../assets/icons/delete.png";

function UserProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userProduct, setUserProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDate, setOpenDate] = useState("");
  const [expirationMonths, setExpirationMonths] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // const parseDate = (dateString) => {
  //   const parts = dateString.split("/");
  //   const year = parts[2];
  //   const month = parts[0];
  //   const day = parts[1];
  //   return `${month}/${day}/${year}`;
  // };

  const getUserProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userProducts`);
      if (response && response.data) {
        const parsedData = response.data.map((product) => ({
          ...product,
          open_date: product.open_date ? product.open_date : null,
        }));
        setUserProduct(parsedData);
      } else {
        console.error("Empty or invalid response from API");
      }
    } catch (error) {
      console.error("Error fetching user products", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleEditClick = (productId) => {
    console.log("handleEditClick called with productId:", productId);
    setSelectedProduct(productId);
    setOpenDate("");
    setExpirationMonths("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${baseUrl}/userProducts/${selectedProduct}`, {
        openDate,
        expirationMonths,
      });
      console.log("Product updated Successfully");
      console.log("userProduct before update:", userProduct);
      const updatedProducts = userProduct.map((product) => {
        if (product.id === selectedProduct) {
          return {
            ...product,
            open_date: openDate,
            expiration_months: expirationMonths,
          };
        }
        return product;
      });
      console.log("Updated products:", updatedProducts);
      setUserProduct(updatedProducts);
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating user products", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/userProducts/${id}`);
      getUserProducts();
    } catch (error) {
      console.error("Error deleting user product", error);
    }
  };

  useEffect(() => {
    getUserProducts();
  }, []);

  if (userProduct === null || userProduct.length === 0) {
    return <div>You don't have any products in your collection yet!</div>;
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
          {filteredProducts.map((product) => {
            const openDate = product.open_date
              ? parseISO(product.open_date)
              : null;
            const isValidOpenDate = openDate && isValid(openDate);
            const showButton = !isValidOpenDate || !product.expiration_months;

            return (
              <div key={product.id} className="userProducts__prodCard">
                <div className="userProducts__content">
                  <p className="userProducts__subHeading">PRODUCT NAME</p>
                  <p className="userProducts__value">{product.product_name}</p>
                </div>
                <div className="userProducts__content">
                  <p className="userProducts__subHeading">BRAND</p>
                  <p className="userProducts__value">{product.product_brand}</p>
                </div>
                {!showButton && (
                  <div className="userProducts__content">
                    <p className="userProducts__subHeading">Opened on</p>
                    <p className="userProducts__value">
                      {format(parseISO(product.open_date), "MM/dd/yyyy")}
                    </p>
                  </div>
                )}
                {!showButton && (
                  <div className="userProducts__content">
                    <p className="userProducts__subHeading">Expiring in</p>
                    <p className="userProducts__value">
                      {product.expiration_months} months
                    </p>
                  </div>
                )}
                {showButton && (
                  <div className="userProducts__editButtonContainer">
                    <button
                      className="userProducts__editButton"
                      onClick={() => handleEditClick(product.id)}
                    >
                      Started using this product? Record open date and
                      expiration months!
                    </button>
                  </div>
                )}
                <div>
                  <img
                    className="userProducts__deleteIcon"
                    src={Delete}
                    alt="delete-icon"
                    onClick={() => handleDelete(product.id)}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {selectedProduct && (
            <div className="modal">
              <div className="modal__content">
                <span
                  className="modal__close"
                  onClick={() => setSelectedProduct(null)}
                >
                  &times;
                </span>
                <form className="modal__form" onSubmit={handleSubmit}>
                  <label className="modal__label" htmlFor="openDate">
                    Open Date:
                  </label>
                  <input
                    className="modal__input"
                    type="date"
                    id="openDate"
                    value={openDate}
                    onChange={(e) => setOpenDate(e.target.value)}
                  />
                  <label className="modal__label" htmlFor="expirationMonths">
                    Expiration Months:
                  </label>
                  <input
                    className="modal__input"
                    type="number"
                    id="expirationMonths"
                    value={expirationMonths}
                    onChange={(e) => setExpirationMonths(e.target.value)}
                  />
                  <button className="modal__button" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default UserProducts;
