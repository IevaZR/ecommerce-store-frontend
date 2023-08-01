import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";
import Footer from "../../Components/Footer/Footer";
import ProductsView from "../../Components/ProductsView/ProductsView";
import Filter from "../../Components/Filter/Filter";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";

const MainPage = () => {
  return (
    <div className="MainPageWrapper" id="MainPage">
      <Header />
      <HeroSection />
      <Filter />
      <ProductsView />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainPage;
