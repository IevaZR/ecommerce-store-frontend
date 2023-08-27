import { useState } from "react";
import "./Header.css";
// @ts-ignore
import Logo from "./../../Assets/logo.png";
// @ts-ignore
import Logo2 from "./../../Assets/logo.svg";
// @ts-ignore
import MobileMenuIcon from "./../../Assets/hamburger-menu.png";
// @ts-ignore
import ShopIcon from "./../../Assets/shop-icon.png";
// @ts-ignore
import UserIcon from './../../Assets/user-icon.png'
import Search from "../Search/Search";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { updateActiveSearch, updateShowAllProducts } =
    useActiveSearchContext();

  const showMobileNavbar = () => {
    setActiveMenu(!activeMenu);
  };

  const showMainPage = () => {
    updateActiveSearch(false);
    updateShowAllProducts(false);
  };

  const showAllProducts = () => {
    updateShowAllProducts(true);
    updateActiveSearch(false)
  };

  return (
    <div className="HeaderWrapper">
      <div className="HeaderLogoWrapper">
        <Link to="/" onClick={showMainPage}>
            <img src={Logo2} alt="Accent logo" className="HeaderLogo" />
        </Link>
      </div>
      <ul className="HeaderNavbar">
        <li className="HeaderNavbarListItem" onClick={showMainPage}>
          <Link to="/" className="HeaderNavbarAnchor">
            Home
          </Link>
        </li>
        <li className="HeaderNavbarListItem" onClick={showAllProducts}>
          <Link to="/shop" className="HeaderNavbarAnchor">
            Shop
          </Link>
        </li>
        <li className="HeaderNavbarListItem">
          <Link to="/about-us" className="HeaderNavbarAnchor">
            About
          </Link>
        </li>
        <li className="HeaderNavbarListItem">
        <HashLink smooth to="#footer" className="HeaderNavbarAnchor">
              Contact
            </HashLink>
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
          <li className="HeaderNavbarListItem" onClick={showMainPage}>
            <Link to="/" className="HeaderNavbarAnchor">
                Home
            </Link>
          </li>
          <li className="HeaderNavbarListItem" onClick={showAllProducts}>
            <a
              href="#ProductView"
              className="HeaderNavbarAnchor"
              onClick={showAllProducts}
            >
              <Link to="/" className="HeaderNavbarAnchor">
                Shop
              </Link>
            </a>
          </li>
          <li className="HeaderNavbarListItem">
            <Link to="/about-us" className="HeaderNavbarAnchor">
              About
            </Link>
          </li>
          <li className="HeaderNavbarListItem">
            <HashLink smooth to="#footer" className="HeaderNavbarAnchor">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
      <button className='HeaderSecretButton'>
        <Link to="/admin-login" className="HeaderNavbarAnchor">ADMIN LOGIN</Link>
      </button>
      <div className="HeaderUtilityContainer">
        <div className="HeaderSearchWrapper">
          <Search />
        </div>
        <Link to="/cart" className="HeaderNavbarAnchor cart">
            <img src={ShopIcon} alt="icon-shop" />
            {/* {!cartIsEmpty && ( */}
              <div className="CartProductsCount">
                12
              </div>
            {/* )} */}
        </Link>
        <Link to='/user-login' className="HeaderNavbarAnchor ">
          <img src={UserIcon} alt="user-icon" className="HeaderNavbarUserIcon"/>
        </Link>
      </div>
    </div>
  );
};

//TODO Pamainīt header izkārtojumu

export default Header;
