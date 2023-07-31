import React from 'react'
import "../FilterItem/FilterItem.css"

const FilterItem = (props) => {
  return (
    <div className="FilterItemWrapper">
        <img className="FilterItemImage" src={props.filterBackgroundImage} alt={props.filterName}></img>
        <h2 className="FilterItemName">{props.filterName}</h2>
    </div>
  )
}

export default FilterItem