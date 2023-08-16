import AboutShopSection from "../../Components/AboutShopSection/AboutShopSection"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="AboutPageWrapper">
        <Header/>
        <AboutShopSection/>
        <ScrollToTopButton/>
        <Footer/>
    </div>
  )
}

export default AboutPage