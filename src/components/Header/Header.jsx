import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import Heart from "../../assets/icons/heart.svg";
import homeIcon from "../../assets/icons/home.png"
import logo from "../../assets/icons/glowGuide-logo.svg";
import myProducts from "../../assets/icons/myProducts_logo.png";

function Header() {
  return (
    <header className="header">
      <Link to='/home'>
       <img className="header__logo" src={logo}></img>
       </Link>
      <div className="header__navbar">
        <NavLink to="/home" className="header__navOptionLink">
          <div className="header__navOptionEl">
            <img
              className="navbar__navOption"
              src={homeIcon}
              alt="home"
            ></img>
          </div>
        </NavLink>
        <NavLink to="/userProducts" className="header__navOptionLink">
          <div className="header__navOptionEl">
            <img
              className="navbar__navOption"
              src={myProducts}
              alt="wishlist"
            ></img>
          </div>
        </NavLink>
        <NavLink to="/wishlist" className="header__navOptionLink">
          <div className="header__navOptionEl">
            <img
              className="navbar__navOption"
              src={Heart}
              alt="wishlist"
            ></img>
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
