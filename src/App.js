import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductsList />
    </div>
  );
}

export default App;
