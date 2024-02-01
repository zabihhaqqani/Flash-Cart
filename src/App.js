import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Nav } from "./components/navbar/NavBar";
import { Products } from "./pages/productListing/Products";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { UserDetails } from "./pages/userDetails/UserDetails";
import { Address } from "./pages/address/Address";
import { Checkout } from "./pages/checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Error } from "./pages/error/Error";
import { OrderHistory } from "./pages/checkout/OrderHistory";
import { useAuthContext } from "./contexts/AuthContext";
import { ProductPage } from "./pages/productDetail/ProductPage";
import { EditAddress } from "./pages/address/EditAddress";
import { RequiresAuth } from "./RequiresAuth";

function App() {
  const { isUserLoggedIn } = useAuthContext();

  return (
    <div className="App">
      <Nav />

      <Routes>
        {/* public routes */}

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/page-not-found" element={<Error />} />
        <Route path="*" element={<Navigate to={"/page-not-found"} />} />

        {/* private routes */}
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

        <Route
          path="/account-details/userdetails/address/edit-address"
          element={
            <RequiresAuth>
              <EditAddress />
            </RequiresAuth>
          }
        />

        <Route
          path="/order-history"
          element={
            <RequiresAuth>
              <OrderHistory />
            </RequiresAuth>
          }
        />
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
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
