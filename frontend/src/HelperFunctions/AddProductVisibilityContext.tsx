import { createContext, useContext, useState } from "react";

const AddProductVisibilityContext = createContext({
    isAddProductVisible: false,
    toggleAddProductVisible: (value: boolean) => {}
});

export function useAddProductVisibility() {
  return useContext(AddProductVisibilityContext);
}

export function AddProductVisibilityProvider({ children }) {
  const [isAddProductVisible, setAddProductVisible] = useState(false);

  const toggleAddProductVisible = () => {
    setAddProductVisible(!isAddProductVisible);
  };

  return (
    <AddProductVisibilityContext.Provider
      value={{ isAddProductVisible, toggleAddProductVisible }}
    >
      {children}
    </AddProductVisibilityContext.Provider>
  );
}