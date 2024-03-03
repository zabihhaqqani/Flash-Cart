import { Category } from "../categories/Category";
import Online from "../../../src/assets/online-shopping.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

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

      <Category />
    </section>
  );
};
