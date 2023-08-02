import React from 'react'
import "../FilterItem/FilterItem.css"
import { useFilterContext } from '../../HelperFunctions/FilterContext';

const FilterItem = ({ filterName, filterBackgroundImage }) => {
  const { selectedFilter, setSelectedFilter } = useFilterContext();

  const handleClick = () => {
    setSelectedFilter((prevSelectedFilter) =>
    prevSelectedFilter === filterName.toLowerCase() ? '' : filterName.toLowerCase()
  );
  };
  
  return (
    <div
      className={`FilterItemWrapper ${selectedFilter === filterName.toLowerCase() ? 'selected' : ''}`}
      onClick={handleClick}
    >
        <img className="FilterItemImage" src={filterBackgroundImage} alt={filterName} />
        <h2 className="FilterItemName">{filterName}</h2>
    </div>
  );
};

export default FilterItem;


