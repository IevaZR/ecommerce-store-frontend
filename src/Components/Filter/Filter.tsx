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
          filterName="Sofas"
        />
        <FilterItem
          filterBackgroundImage={FilterChairs}
          filterName="Chairs"
        />
        <FilterItem
          filterBackgroundImage={FilterTables}
          filterName="Tables"
        />
        <FilterItem
          filterBackgroundImage={FilterBeds}
          filterName="Beds"
        />
      </div>
    </div>
  )
}

export default Filter