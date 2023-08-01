import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";
import Footer from "../../Components/Footer/Footer";
import ProductsView from "../../Components/ProductsView/ProductsView";
import Filter from "../../Components/Filter/Filter";

const MainPage = () => {
  return (
    <div className="MainPageWrapper">
      <div className="HeaderAndHeroSectionWrapper">
        <Header />
        <HeroSection />
      </div>
      <Filter />
      <ProductsView/>
      <Footer />
    </div>
  );
};

export default MainPage;
