import Header from "../../Components/Header/Header";
import ProductList from "../../Components/ProductList/ProductList";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";
import Footer from "../../Components/Footer/Footer";
import Filter from "../../Components/Filter/Filter";

const MainPage = () => {
  return (
    <div className="MainPageWrapper">
      <Header />
      <HeroSection/>
      <Filter />
      <ProductList/>
      <Footer/>
    </div>
  );
};

export default MainPage;
