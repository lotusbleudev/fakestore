import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/details" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
