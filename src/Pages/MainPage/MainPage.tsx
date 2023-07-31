import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";
import Footer from "../../Components/Footer/Footer";
import ProductsView from "../../Components/ProductsView/ProductsView";

const MainPage = () => {
  return (
    <div className="MainPageWrapper">
      <div className="HeaderAndHeroSectionWrapper">
        <Header />
        <HeroSection />
      </div>
      <ProductsView/>
      <Footer />
    </div>
  );
};

export default MainPage;
