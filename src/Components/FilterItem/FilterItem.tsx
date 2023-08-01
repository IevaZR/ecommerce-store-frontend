import React from 'react'
import "../FilterItem/FilterItem.css"

const FilterItem = ({ filterName, filterBackgroundImage }) => {
  return (
    <div className="FilterItemWrapper">
        <img className="FilterItemImage" src={filterBackgroundImage} alt={filterName}></img>
        <h2 className="FilterItemName">{filterName}</h2>
    </div>
  )
}

export default FilterItem;