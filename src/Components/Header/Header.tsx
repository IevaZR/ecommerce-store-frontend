import { useState } from "react";
import "./Header.css";
// @ts-ignore
import Logo from "./../../Assets/logo.png";

// @ts-ignore
import MobileMenuIcon from "./../../Assets/hamburger-menu.png";
import Search from "../Search/Search";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const {updateActiveSearch} = useActiveSearchContext()

  const showMobileNavbar = () => {
    setActiveMenu(!activeMenu);
  };

  const showMainPageProducts = () => {
    updateActiveSearch(false)
  }

  return (
    <div className="HeaderWrapper">
      <div className="HeaderLogoWrapper">
        <img src={Logo} alt="Accent logo" className="HeaderLogo" />
      </div>
      <ul className="HeaderNavbar">
        <li className="HeaderNavbarListItem" onClick={showMainPageProducts}>Home</li>
        <li className="HeaderNavbarListItem" onClick={showMainPageProducts}><a href="#ProductView" className="HeaderNavbarAnchor">Shop</a></li>
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
          <li className="HeaderNavbarListItem"><a href="#contacts" className="HeaderNavbarAnchor">Contact</a></li>
        </ul>
      </div>
       <Search/>
    </div>
  );
};

//TODO Pamainīt header izkārtojumu

export default Header;
