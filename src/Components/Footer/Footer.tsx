import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <div className="FooterWrapper">
            <div className="FooterAboutWrapper">
            <img src="" alt="" className="FooterLogo" />
            <p className="FooterAbout"></p>
            <div className="FooterSocialIconsWrapper">

            </div>
            </div>
            <h3 className="FooterContactsHeading">Contacts</h3>
            <div className="FooterContactsWrapper">
            <div className="FooterAddressWrapper"> </div>
            <div className="FooterPhoneWrapper"></div>
            <div className="FooterEmailWrapper"></div>
            </div>
            <div className="FotterNewsLetterWrapper">
            <h3 className="FooterNewsletterHeading">Join To Newsletter</h3>
            <p className="FooterNewsletterAnnouncement"></p>
            <div className="FooterNewsletterFormWrapper"></div>
            </div>
        </div>
    </div>
  )
}

export default Footer