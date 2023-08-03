import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";
import Footer from "../../Components/Footer/Footer";
import ProductsView from "../../Components/ProductsView/ProductsView";
import Filter from "../../Components/Filter/Filter";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";
import Advertisement from "../../Components/Advertisment/Advertisement";
import { FilterProvider } from "../../HelperFunctions/FilterContext";

const MainPage = () => {

  return (
    <FilterProvider>
    <div className="MainPageWrapper" id="MainPage">
      <Header />
      <HeroSection />
      <Filter />
      <Advertisement />
      <ProductsView />
      <Footer />
      <ScrollToTopButton/>
    </div>
    </FilterProvider>
  );
};

export default MainPage;
