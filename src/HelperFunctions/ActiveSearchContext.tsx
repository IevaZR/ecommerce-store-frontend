import { createContext, useContext, useState } from "react";

const ActiveSearchContext = createContext({
    activeSearch: false,
    updateActiveSearch: (value: boolean) => {},
    searchQuery: "",
    updateSearchQuery: (query: string) => {},
    
  });

export const useActiveSearchContext = () => {
    return useContext(ActiveSearchContext)
}

export const ActiveSearchProvider = ({ children }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")

  const updateActiveSearch = (value: boolean) => {
    setActiveSearch(value);
  };

  const updateSearchQuery = (query:string) => {
    setSearchQuery(query);
  }

  return (
    <ActiveSearchContext.Provider value={{ activeSearch, updateActiveSearch, searchQuery, updateSearchQuery }}>
      {children}
    </ActiveSearchContext.Provider>
  );
}

//TODO Iziet vēlreiz cauri visām useContext funkcijām un kā tās strādā