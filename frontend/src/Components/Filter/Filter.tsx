import React from 'react'
import "../Filter/Filter.css"
import FilterItem from '../FilterItem/FilterItem'
// @ts-ignore
import FilterBeds from '../../Assets/FilterBeds.jpeg'
// @ts-ignore
import FilterChairs from '../../Assets/FilterChairs.jpeg'
// @ts-ignore
import FilterSofas from '../../Assets/FilterSofas.jpeg'
// @ts-ignore
import FilterTables from '../../Assets/FilterTables.jpeg'


const Filter: React.FC = () => {
  return (
      <div className="FilterWrapper">
        <div className="Filter">
          <FilterItem
            filterBackgroundImage={FilterSofas}
            filterCategory="Sofas"
          />
          <FilterItem
            filterBackgroundImage={FilterChairs}
            filterCategory="Chairs"
          />
          <FilterItem
            filterBackgroundImage={FilterTables}
            filterCategory="Tables"
          />
          <FilterItem
            filterBackgroundImage={FilterBeds}
            filterCategory="Beds"
          />
        </div>
      </div>
  )
}

export default Filter