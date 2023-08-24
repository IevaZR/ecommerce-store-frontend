import { createContext, useContext, useState } from 'react';

const AdminVisibleContentContex = createContext();

export const useAdminVisibleContentContex = () => {
  return useContext(AdminVisibleContentContex);
};

export const AdminVisibleContentProvider = ({ children }) => {
  const [adminVisibleContent, setAdminVisibleContent] = useState('inventory');

  return (
    <AdminVisibleContentContex.Provider value={{ adminVisibleContent, setAdminVisibleContent }}>
      {children}
    </AdminVisibleContentContex.Provider>
  );
};