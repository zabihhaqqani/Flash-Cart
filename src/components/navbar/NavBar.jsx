import { useFilterContext } from "../../contexts/FilterContext"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import { useProductContext } from "../../contexts/ProductsContext"
import Logo from "../../assets/logo.png"
import "./NavBar.css"

export const Nav = () => {
  const { searchFilter } = useFilterContext()
  const { isUserLoggedIn, user } = useAuthContext()
  const { cartData, wishListData } = useProductContext()
  const navigate = useNavigate()

  return (
    <nav className="navbar-container">
      <div className="logo-container" onClick={() => navigate("/")}>
        <img Logo src={Logo} alt="logo" className="logo" />
        <h3>Flash Cart</h3>
      </div>

      <div className="wrapper">
        <span class="material-symbols-outlined">search</span>
        <input
          onClick={() => navigate("/products")}
          onChange={(e) => searchFilter(e)}
          className="search-bar"
          placeholder="Search"
          type="text"
        />
      </div>

      <div className="nav-icons">
        <li className="explore" onClick={() => navigate("/products")}>
          Explore
        </li>

        <li onClick={() => navigate("/wishlist")}>
          <span className="icon-number">
            {isUserLoggedIn ? wishListData?.length : "0"}
          </span>
          <span className="material-symbols-outlined">favorite</span>
        </li>

        <li onClick={() => navigate("/cart")}>
          <span className="icon-number">
            {isUserLoggedIn ? cartData?.length : "0"}
          </span>
          <span className="material-symbols-outlined">shopping_cart</span>
        </li>

        <li>
          {!isUserLoggedIn ? (
            <span
              className="material-symbols-outlined"
              onClick={() => {
                !isUserLoggedIn
                  ? navigate("/login")
                  : navigate("/account-details/userdetails")
              }}
            >
              account_circle
            </span>
          ) : (
            <span style={{ fontSize: "16px" }}>{user?.firstName}</span>
          )}
        </li>
      </div>
    </nav>
  )
}
