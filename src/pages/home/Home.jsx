import { Category } from "../categories/Category";
import "./Home.css";
import AppleLogo from "../../../src/assets/apple-logo.png";
import HpLogo from "../../../src/assets/hp-logo.png";
import Online from "../../../src/assets/online-shopping.png";
import DellLogo from "../../../src/assets/dell-logo.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <header className="title-container">
        <div className="paragraph">
          <p>
            <strong>This Festival Season, find the best deals 🔥</strong>
          </p>
          <h1>Exclusive Discounts On All Range Of Products!</h1>
          <button onClick={() => navigate("/products")}>
            Shop Now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <img src={Online} alt="sale" className="sale-img" />
      </header>

      {/* <div className="top-brands-container">
        <h2>Top Brands</h2>
        <div className="brands-container">
          <img src={AppleLogo} alt="apple" />
          <img src={HpLogo} alt="hp-logo" />
          <img src={DellLogo} alt="dell-logo" />
        </div>
      </div> */}

      <Category />
    </section>
  );
};
