import { createContext, useContext, useState } from 'react';

const OrderFilterContext = createContext();

export const useOrderFilterContext = () => {
  return useContext(OrderFilterContext);
};

export const OrderFilterProvider = ({ children }) => {
  const [orderFilterStatus, setOrderFilterStatus] = useState('All');

  return (
    <OrderFilterContext.Provider value={{ orderFilterStatus, setOrderFilterStatus }}>
      {children}
    </OrderFilterContext.Provider>
  );
};