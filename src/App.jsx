import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import SearchProductsPage from "./pages/SearchProductsPage/SearchProductsPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<SearchProductsPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;