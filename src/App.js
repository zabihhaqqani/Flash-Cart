import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Nav } from "./pages/Home/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
