import React from 'react'
import "./FilterItem2.css"
import { useFilterContext } from '../../HelperFunctions/FilterContext';

const FilterItem2 = ({ filterName }) => {
  const { selectedFilter, setSelectedFilter } = useFilterContext();

  const handleClick = () => {
    setSelectedFilter((prevSelectedFilter) =>
      prevSelectedFilter === filterName.toLowerCase() ? '' : filterName.toLowerCase()
    );
  };

  return (
    <div
      className={`Filter2ItemWrapper ${selectedFilter === filterName.toLowerCase() ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <h2 className="Filter2ItemName">{filterName}</h2>
    </div>
  );
};

export default FilterItem2;


