import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import SearchProductsPage from "./pages/SearchProductsPage/SearchProductsPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import UserProducts from "./pages/UserProducts/UserProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/category/:category" element={<SearchProductsPage />} />
        <Route path="/products" element={<SearchProductsPage />} />
        <Route path="/userProducts" element={<UserProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
