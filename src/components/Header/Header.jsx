import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__navbar">
        <NavLink to="/home" className="header__navOptionLink">
          <div className="header__navOptionEl">
            <img
              className="navbar__navOption"
              src="src/assets/icons/home.png"
              alt="home"
            ></img>
          </div>
        </NavLink>
        <NavLink to="/wishlist" className="header__navOptionLink">
          <div className="header__navOptionEl">
            <img
              className="navbar__navOption"
              src="src/assets/icons/heart.svg"
              alt="wishlist"
            ></img>
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
