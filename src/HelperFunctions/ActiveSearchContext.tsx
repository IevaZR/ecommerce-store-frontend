import { createContext, useContext, useState } from "react";

const ActiveSearchContext = createContext({
    activeSearch: false,
    updateActiveSearch: (value: boolean) => {},
    searchQuery: "",
    updateSearchQuery: (query: string) => {},
    showAllProducts: true,
    updateShowAllProducts: (value: boolean) => {},
  });

export const useActiveSearchContext = () => {
    return useContext(ActiveSearchContext)
}

export const ActiveSearchProvider = ({ children }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")
  const [showAllProducts, setShowAllProducts] = useState(true)
  

  const updateActiveSearch = (value: boolean) => {
    setActiveSearch(value);
  };
  const updateShowAllProducts = (value: boolean) => {
    setShowAllProducts(value);
  };

  const updateSearchQuery = (query:string) => {
    setSearchQuery(query);
  }

  return (
    <ActiveSearchContext.Provider value={{ activeSearch, updateActiveSearch, searchQuery, updateSearchQuery, showAllProducts, updateShowAllProducts }}>
      {children}
    </ActiveSearchContext.Provider>
  );
}

//TODO Iziet vēlreiz cauri visām useContext funkcijām un kā tās strādā