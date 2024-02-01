import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ProductsContext } from "./contexts/ProductsContext";
import { FilterContextProvider } from "./contexts/FilterContext";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { OrderProvider, OrderContext } from "./contexts/OrderContext";

export { ProductsContext };
export { AuthContext };
export { OrderContext };
// Call make Server

makeServer();

ReactDOM.render(

    <Router>
      <OrderProvider>
        <AuthProvider>
          <ProductsProvider>
            <FilterContextProvider>
              <App />
            </FilterContextProvider>
          </ProductsProvider>
        </AuthProvider>
      </OrderProvider>
    </Router>
  ,
  document.getElementById("root")
);
