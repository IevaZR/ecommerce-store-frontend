import { createContext, useContext, useState } from "react";

const EditProductVisibilityContext = createContext({
    isEditProductVisible: false,
    toggleEditProductVisible: (value: boolean) => {}
});

export function useEditProductVisibility() {
  return useContext(EditProductVisibilityContext);
}

export function EditProductVisibilityProvider({ children }) {
  const [isEditProductVisible, setEditProductVisible] = useState(false);

  const toggleEditProductVisible = () => {
    setEditProductVisible(!isEditProductVisible);
  };

  return (
    <EditProductVisibilityContext.Provider
      value={{ isEditProductVisible, toggleEditProductVisible }}
    >
      {children}
    </EditProductVisibilityContext.Provider>
  );
}