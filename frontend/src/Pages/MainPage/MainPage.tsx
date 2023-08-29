import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";
import Footer from "../../Components/Footer/Footer";
import Filter from "../../Components/Filter/Filter";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";
import Advertisement from "../../Components/Advertisment/Advertisement";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const MainPage = () => {

  return (
    <div className="MainPageWrapper" id="MainPage">
      <Header />
      <HeroSection />
      <Filter />
      <Advertisement />
      <FeaturedProducts />
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
};

export default MainPage;
