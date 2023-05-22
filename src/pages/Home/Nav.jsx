import "../Home/Nav.css";

export function Nav() {
  return (
    <>
      <nav className="header-container">
        <h2>
          Flash<span className="cart">Cart</span>
        </h2>
        <input className="search-bar" placeholder="Search" type="text" />
        <div className="nav-icons">
        <button className="login-btn">Login</button>
        <i class="fa-solid fa-user fa-lg"></i>
        <i class="fa-solid fa-heart fa-lg"></i>
        <i class="fa-solid fa-cart-shopping fa-lg"></i>{" "}
        </div>
      </nav>
    </>
  );
}
