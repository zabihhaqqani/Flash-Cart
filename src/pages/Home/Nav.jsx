import { useFilterContext } from "../../contexts/FilterContext";
import { NavLink, useNavigate } from "react-router-dom";
import "../Home/Nav.css";
// import { useCartContext } from "../../contexts/CartContext";
// import { useWishlistContext } from "../../contexts/WishlistContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useProductContext } from "../../contexts/ProductsContext";

export function Nav() {
  const { searchFilter } = useFilterContext();
  // const { cartItems } = useCartContext();
  // const { wishListProducts } = useWishlistContext();
  const navigate = useNavigate();
  const { isUserLoggedIn, user } = useAuthContext();
  const {cartData,wishListData} = useProductContext()
  // console.log(user);
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
        <div onClick={(e)=>console.log(e.currentTarget.innerText)} className="wrapper">
        <input
          onChange={e => searchFilter(e)}
          className="search-bar"
          placeholder="Search"
          type="text"
        />
        
         </div>
        <div className="nav-icons">
          <NavLink className="explore" style={getActive} to="/products">
            Explore
          </NavLink>
          {/* <button className="login-btn">Login</button> */}
          {!isUserLoggedIn ? (
            <i
              className="fa-solid fa-user fa-lg"
              onClick={() => navigate("/login")}
              
            ></i>
          ) : (
            
            <p className="user-name"  onClick={()=>navigate("/account-details/userdetails")}>
              {user?.firstName}
            </p>
          )}
        
          <NavLink style={getActive} to="/wishlist">
            {" "}
            <i className="fa-solid fa-heart fa-lg">
              <span className="icon-number">{isUserLoggedIn?wishListData?.length:"0"}</span>
            </i>{" "}
          </NavLink>
          <NavLink style={getActive} to="/cart">
            <i className="fa-solid fa-cart-shopping fa-lg">
              <span className="icon-number">{isUserLoggedIn?cartData?.length:"0"}</span>
            </i>{" "}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
