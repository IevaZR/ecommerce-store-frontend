import { createContext, useContext, useState } from "react";

const ActiveSearchContext = createContext({
    activeSearch: false,
    updateActiveSearch: (value: boolean) => {},
    searchQuery: "",
    updateSearchQuery: (query: string) => {},
    showAllProducts: false,
    updateShowAllProducts: (value: boolean) => {},
    scrollToContacts: false,
    updateScrollToContacts: (query: boolean) => {},
  });

export const useActiveSearchContext = () => {
    return useContext(ActiveSearchContext)
}

export const ActiveSearchProvider = ({ children }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [scrollToContacts, setScrollToContacts] = useState(false)
  

  const updateActiveSearch = (value: boolean) => {
    setActiveSearch(value);
  };
  const updateShowAllProducts = (value: boolean) => {
    setShowAllProducts(value);
  };
  const updateScrollToContacts = (value: boolean) => {
    setScrollToContacts(value);
  };

  const updateSearchQuery = (query:string) => {
    setSearchQuery(query);
  }

  return (
    <ActiveSearchContext.Provider value={{ activeSearch, updateActiveSearch, searchQuery, updateSearchQuery, showAllProducts, updateShowAllProducts, scrollToContacts, updateScrollToContacts }}>
      {children}
    </ActiveSearchContext.Provider>
  );
}

//TODO Iziet vēlreiz cauri visām useContext funkcijām un kā tās strādā