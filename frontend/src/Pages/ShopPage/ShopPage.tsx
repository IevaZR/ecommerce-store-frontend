import Header from "../../Components/Header/Header";
import "./ShopPage.css";
import { FilterProvider } from "../../HelperFunctions/FilterContext";
import Filter from "../../Components/Filter/Filter";
import ProductsView from "../../Components/ProductsView/ProductsView";
import Footer from "../../Components/Footer/Footer";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";

const ShopPage = () => {
  return (
    <FilterProvider>
      <div id="ShopPage" className="ShopPageWrapper">
        <Header />
        {/* <Filter/> */}
        <ProductsView/>
        <Footer/>
        <ScrollToTopButton/>
      </div>
    </FilterProvider>
  );
};

export default ShopPage;
