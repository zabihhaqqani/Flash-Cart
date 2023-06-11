import { useFilterContext } from "../../contexts/FilterContext";
import { NavLink } from "react-router-dom";
import "../Home/Nav.css";
import { useCartContext } from "../../contexts/CartContext";
import { useWishlistContext } from "../../contexts/WishlistContext";

export function Nav() {
  const { searchFilter } = useFilterContext();
  const {cartItems} = useCartContext()
    const {wishListProducts} = useWishlistContext()


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
          <button className="login-btn">Login</button>
          <i class="fa-solid fa-user fa-lg"></i>
          <NavLink style={getActive} to="/wishlist">
            {" "}
            <i class="fa-solid fa-heart fa-lg"><span className="icon-number">{wishListProducts.length}</span></i>{" "}
          </NavLink>
          <NavLink  style={getActive} to="/cart">
          <i class="fa-solid fa-cart-shopping fa-lg"><span className="icon-number">{cartItems.length}</span></i>{" "}
 
          </NavLink>
        </div>
      </nav>
    </>
  );
}
