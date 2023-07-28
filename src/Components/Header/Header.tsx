import "./Header.css";
// @ts-ignore
import Logo from "./../../Assets/logo.png";
// @ts-ignore
import SearchIcon from "./../../Assets/search-icon.png";

const Header = () => {
  return (
    <div className="HeaderWrapper">
      <div className="HeaderLogoWrapper">
        <img src={Logo} alt="Accent logo" className="HeaderLogo" />
      </div>
      <ul className="HeaderNavbar">
        <li className="HeaderNavbarListItem1">Home</li>
        <li className="HeaderNavbarListItem">Shop</li>
        <li className="HeaderNavbarListItem">About</li>
        <li className="HeaderNavbarListItem">Blog</li>
        <li className="HeaderNavbarListItem">Contact</li>
      </ul>
      <div className="HeaderSearchWarpper">
        <input type="text" className="HeaderSearchInput"></input>
        <img src={SearchIcon} alt="search-icon" className="HeaderSearchIcon" />
      </div>
    </div>
  );
};

export default Header;
