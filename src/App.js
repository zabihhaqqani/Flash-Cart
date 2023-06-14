import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Nav } from "./pages/Home/Nav";
import { Products } from "./pages/Products/Products";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Cart } from "./pages/Cart/Cart";
import { RequiresAuth } from "./Auth/RequiresAuth";
import { Login } from "./pages/Login/Login";
import { ProductPage } from "./pages/ProductDetailPage/ProductPage";
import { AuthHandler } from "./Auth/AuthHandler";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductPage />} />

        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
      </Routes>
      {/* <AuthHandler /> */}
    </div>
  );
}

export default App;
