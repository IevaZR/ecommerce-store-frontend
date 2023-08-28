import React from 'react'
import "./FilterItem.css"
import { useFilterContext } from '../../HelperFunctions/FilterContext';
import { useNavigate } from "react-router-dom";
import { useActiveSearchContext } from '../../HelperFunctions/ActiveSearchContext';

const FilterItem = ({ filterCategory, filterBackgroundImage }) => {
  const { selectedFilter, setSelectedFilter } = useFilterContext();
  const navigate = useNavigate();
  const { updateShowAllProducts } =
    useActiveSearchContext();

  const handleClick = () => {
    updateShowAllProducts(false);
    navigate("/shop");
    setSelectedFilter((prevSelectedFilter) =>
    prevSelectedFilter === filterCategory.toLowerCase() ? '' : filterCategory.toLowerCase()
  );
  };
  
  return (
    <div
      className={`FilterItemWrapper ${selectedFilter === filterCategory.toLowerCase() ? 'selected' : ''}`}
      onClick={handleClick}
    >
        <img className="FilterItemImage" src={filterBackgroundImage} alt={filterCategory} />
        <h2 className="FilterItemName">{filterCategory}</h2>
    </div>
  );
};

export default FilterItem;


