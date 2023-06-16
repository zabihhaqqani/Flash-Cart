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
import { Address } from "./pages/address/Address";
import { EditAddress } from "./pages/address/EditAddress";
import { Checkout } from "./pages/Checkout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
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
        <Route
          path="/account-details/userdetails/address"
          element={
            <RequiresAuth>
              <Address />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/account-details/userdetails/address/edit-address"
          element={<EditAddress />}
        />
      </Routes>
      {/* <AuthHandler /> */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
