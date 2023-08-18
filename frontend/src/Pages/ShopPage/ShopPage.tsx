import Header from "../../Components/Header/Header";
import "./ShopPage.css";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import ProductList from "../../Components/ProductList/ProductList";
import { FilterProvider } from "../../HelperFunctions/FilterContext";
import Filter from "../../Components/Filter/Filter";
import ProductsView from "../../Components/ProductsView/ProductsView";

const ShopPage = () => {
  const { activeSearch, searchQuery, showAllProducts } =
    useActiveSearchContext();

  return (
    <FilterProvider>
      <div id="ShopPage" className="ShopPageWrapper">
        <Header />
        <Filter/>
        <ProductsView/>
      </div>
    </FilterProvider>
  );
};

export default ShopPage;
