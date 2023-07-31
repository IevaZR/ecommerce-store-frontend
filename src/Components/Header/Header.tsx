import { useState } from "react";
import "./Header.css";
// @ts-ignore
import Logo from "./../../Assets/logo.png";
// @ts-ignore
import SearchIcon from "./../../Assets/search-icon.png";
// @ts-ignore
import MobileMenuIcon from "./../../Assets/hamburger-menu.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const showMobileNavbar = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className="HeaderWrapper">
      <div className="HeaderLogoWrapper">
        <img src={Logo} alt="Accent logo" className="HeaderLogo" />
      </div>
      <ul className="HeaderNavbar">
        <li className="HeaderNavbarListItem">Home</li>
        <li className="HeaderNavbarListItem">Shop</li>
        <li className="HeaderNavbarListItem">About</li>
        <li className="HeaderNavbarListItem">Blog</li>
        <li className="HeaderNavbarListItem"><a href="#contacts" className="HeaderNavbarAnchor">Contact</a></li>
      </ul>
      <div className="HeaderNavbarMobileWrapper">
        <button className="HeaderNavbarMobileButton" onClick={showMobileNavbar}>
          <img
            src={MobileMenuIcon}
            alt="menu"
            className="HeaderNavbarMobileButtonImage"
          />
        </button>
        <ul
          className={
            activeMenu ? "HeaderNavbarMobileActive" : "HeaderNavbarMobile"
          }
        >
          <li className="HeaderNavbarListItem">Home</li>
          <li className="HeaderNavbarListItem">Shop</li>
          <li className="HeaderNavbarListItem">About</li>
          <li className="HeaderNavbarListItem">Blog</li>
          <li className="HeaderNavbarListItem">Contact</li>
        </ul>
      </div>
      <div className="HeaderSearchWarpper">
        <input type="text" className="HeaderSearchInput"></input>
        <button className="HeaderSearchButton">
          <img
            src={SearchIcon}
            alt="search-icon"
            className="HeaderSearchIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
