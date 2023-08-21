import { createContext, useContext, useState } from "react";

const EditProductContext = createContext();

export const useEditProduct = () => {
  return useContext(EditProductContext);
};

export const EditProductProvider = ({ children }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [productUpdated, setProductUpdated] = useState(false)

  return (
    <EditProductContext.Provider value={{ editingProduct, setEditingProduct, productUpdated, setProductUpdated }}>
      {children}
    </EditProductContext.Provider>
  );
};