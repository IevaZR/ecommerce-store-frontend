import "./UserPageFavouritesList.css";
import ProductCard from "../ProductCard/ProductCard";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import { useState, useEffect } from "react";
import axios from "axios";

const UserPageFavouritesList = () => {
  const { user } = useActiveSearchContext();
  const [favouritedProducts, setFavouritedProducts] = useState([]);

  useEffect(() => {
    getUserFavourites();
    console.log(getUserFavouritesIds());
  }, []);

  const getUserFavouritesIds = () => {
    const favouritesArray = [];
    user.favourites.map((favourite) => favouritesArray.push(favourite.id));
    return favouritesArray;
  };

  const getUserFavourites = async () => {
    try {
      const array = JSON.stringify(getUserFavouritesIds());
      const response = await axios.get(
        `http://localhost:3009/get-multiple-products/${array}`
      );
      setFavouritedProducts(response.data);
      console.log(array);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="UserPageFavouritesListWrapper">
      <h2 className="UserPageFavouritesListHeading">Favourited Products</h2>
      <div className="UserPageFavouritesList">
        {favouritedProducts?.map((product) => (
          <ProductCard key={product.id} productList={product} />
        ))}
      </div>
    </div>
  );
};

export default UserPageFavouritesList;
