import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./contexts/CategoryContext";
import { CategoryContext } from "./contexts/CategoryContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ProductsContext } from "./contexts/ProductsContext";
import { FilterContextProvider } from "./contexts/FilterContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CartProvider } from "./contexts/CartContext";

export { CategoryContext };
export { ProductsContext };
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
              <Router>
    <CategoryProvider>
      <ProductsProvider>
        <FilterContextProvider>
          <WishlistProvider>
            <CartProvider>
                <App />
            </CartProvider>
          </WishlistProvider>
        </FilterContextProvider>
      </ProductsProvider>
    </CategoryProvider>
              </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
