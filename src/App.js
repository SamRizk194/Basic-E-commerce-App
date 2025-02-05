import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        ></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
