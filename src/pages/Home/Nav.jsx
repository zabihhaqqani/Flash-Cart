import { useFilterContext } from "../../contexts/FilterContext";
import { NavLink, useNavigate } from "react-router-dom";
import "../Home/Nav.css";
import { useCartContext } from "../../contexts/CartContext";
import { useWishlistContext } from "../../contexts/WishlistContext";
import { useAuthContext } from "../../contexts/AuthContext";

export function Nav() {
  const { searchFilter } = useFilterContext();
  const { cartItems } = useCartContext();
  const { wishListProducts } = useWishlistContext();
  const navigate = useNavigate();
  const { isUserLoggedIn, user } = useAuthContext();
  console.log(user);
  const getActive = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    textDecoration: "none",
  });

  return (
    <>
      <nav className="header-container">
        <h2>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            Flash<span className="cart">Cart</span>
          </NavLink>
        </h2>
        <input
          onChange={e => searchFilter(e)}
          className="search-bar"
          placeholder="Search"
          type="text"
        />
        <div className="nav-icons">
          <NavLink style={getActive} to="/products">
            Explore
          </NavLink>
          {/* <button className="login-btn">Login</button> */}
          {!isUserLoggedIn ? (
            <i
              class="fa-solid fa-user fa-lg"
              onClick={() => navigate("/login")}
            ></i>
          ) : (
            <p className="user-name" onClick={()=>navigate("/account-details/userdetails")}>
              {user?.firstName}
            </p>
          )}
          {/* <i
              class="fa-solid fa-user fa-lg"
              onClick={() => navigate("/login")}
            ></i> */}
          <NavLink style={getActive} to="/wishlist">
            {" "}
            <i className="fa-solid fa-heart fa-lg">
              <span className="icon-number">{wishListProducts.length}</span>
            </i>{" "}
          </NavLink>
          <NavLink style={getActive} to="/cart">
            <i className="fa-solid fa-cart-shopping fa-lg">
              <span className="icon-number">{cartItems.length}</span>
            </i>{" "}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
