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
import { SignUp } from "./pages/SignUp/SignUp";
import { useAuthContext } from "./contexts/AuthContext";
import { UserDetails } from "./pages/UserDetails/UserDetails";

function App() {
  const {isUserLoggedIn} = useAuthContext()
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
        {!isUserLoggedIn ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route
            path="/account-details/userdetails"
            element={<UserDetails />}
          />
        )}
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <AuthHandler /> */}
    </div>
  );
}

export default App;
