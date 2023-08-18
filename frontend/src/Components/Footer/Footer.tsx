import React from "react";
import "./Footer.css";
// @ts-ignore
import Logo from "./../../Assets/logo.png";
// @ts-ignore
import Logo2 from "./../../Assets/logo.svg";
// @ts-ignore
import FacebookIcon from "./../../Assets/facebook-icon.png";
// @ts-ignore
import InstagramIcon from "./../../Assets/instagram-icon.png";
// @ts-ignore
import TwitterIcon from "./../../Assets/twitter-icon.png";
// @ts-ignore
import LocationIcon from "./../../Assets/location-icon.png";
// @ts-ignore
import PhoneIcon from "./../../Assets/telephone-icon.png";
// @ts-ignore
import EmailIcon from "./../../Assets/email-icon.png";
// @ts-ignore
import ArrowIcon from "./../../Assets/arrow-icon.png";

const Footer = () => {
  return (
      <div className="FooterWrapper" id="footer">
        <div className="FooterAboutWrapper">
          <img src={Logo2} alt="logo" className="FooterLogo" />
          <p className="FooterAbout">
            Follow us on social media to stay up to date with newest furniture
            fashion
          </p>
          <div className="FooterSocialIconsWrapper">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img
              src={FacebookIcon}
              alt="facebook-icon"
              className="FooterSocialIcon"
            /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img
              src={InstagramIcon}
              alt="instagram-icon"
              className="FooterSocialIcon"
            /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><img
              src={TwitterIcon}
              alt="twitter-icon"
              className="FooterSocialIcon"
            /></a>
          </div>
        </div>
        <div className="FooterContactsWrapper" >
          <h3 className="FooterContactsHeading">Contacts</h3>
          <div className="FooterAddressWrapper">
            <img
              src={LocationIcon}
              alt="location-icon"
              className="FooterContactIcon"
            />
            <p className="FooterContactText">
              2517 Charles Street, Michigan, MI 48150
            </p>
          </div>
          <div className="FooterPhoneWrapper">
            <img
              src={PhoneIcon}
              alt="phone-icon"
              className="FooterContactIcon"
            />
            <p className="FooterContactText">
              +351 2862186319
            </p>
          </div>
          <div className="FooterEmailWrapper">
            <img
              src={EmailIcon}
              alt="email-icon"
              className="FooterContactIcon"
            />
            <p className="FooterContactText">
              accent@accent.com
            </p>
          </div>
        </div>
        <div className="FotterNewsLetterWrapper">
          <h3 className="FooterNewsletterHeading">Join To Newsletter</h3>
          <p className="FooterNewsletterAnnouncement">Subscribe to our newsletter</p>
          <div className="FooterNewsletterFormWrapper">
            <input type="text" className="FooterNewsletterFormInput" />
            <button className="FooterNewltetterFormButton">
                <img src={ArrowIcon} alt="arrow-icon" className="FooterNewsletterButtonArrow" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default Footer;
