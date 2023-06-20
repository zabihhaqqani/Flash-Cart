import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {

 const initialState = {
  addressDetails: {},
  priceDetails: {
    price: 0,
    totalAmt: 0,
    totalDiscount: 0,
  },
  orderHistory: [],
};

    // const [orderState,orderDispatch] = useState(orderReducer,initialState)


  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
}
