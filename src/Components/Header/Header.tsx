import { useState } from "react";
import "./Header.css";
// @ts-ignore
import Logo from "./../../Assets/logo.png";
// @ts-ignore
import MobileMenuIcon from "./../../Assets/hamburger-menu.png";
import Search from "../Search/Search";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { updateActiveSearch, updateShowAllProducts } = useActiveSearchContext();

  const showMobileNavbar = () => {
    setActiveMenu(!activeMenu);
  };

  const showMainPageProducts = () => {
    updateActiveSearch(false);
  };

  const showAllProducts = () => {
    updateShowAllProducts(true)
  }

  return (
    <div className="HeaderWrapper">
      <div className="HeaderLogoWrapper">
      <Link to="/"><a href="#MainPage"><img src={Logo} alt="Accent logo" className="HeaderLogo" /></a></Link>
      </div>
      <ul className="HeaderNavbar">
        <li className="HeaderNavbarListItem" onClick={showMainPageProducts}>
        <Link to="/" className="HeaderNavbarAnchor"><a href="#MainPage" className="HeaderNavbarAnchor">
            Home
          </a></Link>
        </li>
        <li className="HeaderNavbarListItem" onClick={showAllProducts}>
        <a href="#ProductView" className="HeaderNavbarAnchor" onClick={showAllProducts}>
            <Link to="/" className="HeaderNavbarAnchor">Shop</Link>
          </a>
        </li>
        <li className="HeaderNavbarListItem"><Link to="/about-us" className="HeaderNavbarAnchor">About</Link></li>
        <li className="HeaderNavbarListItem">Blog</li>
        <li className="HeaderNavbarListItem">
          <a href="#contacts" className="HeaderNavbarAnchor">
            Contact
          </a>
        </li>
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
          <li className="HeaderNavbarListItem" onClick={showMainPageProducts}>
          <a href="#MainPage" className="HeaderNavbarAnchor">
            Home
          </a>
        </li>
        <li className="HeaderNavbarListItem" onClick={showMainPageProducts}>
          <a href="#ProductView" className="HeaderNavbarAnchor">
            Shop
          </a>
        </li>
        <li className="HeaderNavbarListItem">About</li>
        <li className="HeaderNavbarListItem">Blog</li>
        <li className="HeaderNavbarListItem">
          <a href="#contacts" className="HeaderNavbarAnchor">
            Contact
          </a>
        </li>
        </ul>
      </div>
      <div className="HeaderSearchWrapper">
        <Search />
      </div>
    </div>
  );
};

//TODO Pamainīt header izkārtojumu

export default Header;
