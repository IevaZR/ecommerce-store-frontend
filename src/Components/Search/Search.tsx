
import "./Search.css"
// import { FurnitureData } from '../../data/data'
// @ts-ignore
import SearchIcon from "./../../Assets/search-icon.png";
// import {useState} from 'react'
import {useState} from 'react';
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";

const Search = () => {
    const {updateActiveSearch, updateSearchQuery, updateShowAllProducts} = useActiveSearchContext()
    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput)
    }

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        showSearchResults()
      }
    }

    const showSearchResults = () => {
        updateActiveSearch(true);
        updateShowAllProducts(false)
        updateSearchQuery(input)
        setInput("")
    }
  return (
    <div className="SearchWarpper">
         <input type="text" className="SearchInput" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
        <a href="#ProductView"><button className="SearchButton" onClick={showSearchResults}>
          <img
            src={SearchIcon}
            alt="search-icon"
            className="SearchIcon"
          />
        </button></a>
    </div>
  )
}

export default Search