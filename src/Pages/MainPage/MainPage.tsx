import Header from "../../Components/Header/Header";
import ProductList from "../../Components/ProductList/ProductList";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./MainPage.css";
import Footer from "../../Components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="MainPageWrapper">
      <Header />
      <HeroSection/>
      <ProductList/>
      <Footer/>
    </div>
  );
};

export default MainPage;
