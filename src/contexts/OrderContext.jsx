import { createContext, useContext, useReducer } from "react";
import { OrderReducer } from "../reducer/OrderReducer";

export const OrderContext = createContext();

export const  OrderProvider = ({ children }) =>{
  const initialState = {
    addressDetails: {},
    priceDetails: {
      totalPrice: 0,
      totalDiscount: 0,
    },
    orderHistory: [],
  };

  const [orderState, orderDispatch] = useReducer(OrderReducer, initialState);

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
}
const useOrderContext = () => {
  return useContext(OrderContext);
};

export { useOrderContext };
