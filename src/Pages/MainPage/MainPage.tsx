import Header from "../../Components/Header/Header";
import ProductList from "../../Components/ProductList/ProductList";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="MainPageWrapper">
      <Header />
      <HeroSection/>
      <ProductList/>
    </div>
  );
};

export default MainPage;
