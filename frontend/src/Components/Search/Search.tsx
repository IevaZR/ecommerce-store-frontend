import "./Search.css";
// import { FurnitureData } from '../../data/data'
import SearchIcon from "./../../Assets/search-icon.png";
// import {useState} from 'react'
import { useState } from "react";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { updateActiveSearch, updateSearchQuery, updateShowAllProducts } =
    useActiveSearchContext();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [emptySearch, setEmptySearch] = useState(false)

  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      showSearchResults();
    }
  };

  const showSearchResults = () => {
    if (input.trim() !== "") {
      updateActiveSearch(true);
      updateShowAllProducts(false);
      updateSearchQuery(input);
      setInput("");
      navigate("/shop");
      setEmptySearch(false)
    } 
  };
  return (
    <div className="SearchWarpper">
      <input
        type="text"
        className="SearchInput"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
        <button className="SearchButton" onClick={showSearchResults}>
          <img src={SearchIcon} alt="search-icon" className="SearchIcon" />
        </button>
    </div>
  );
};

export default Search;
