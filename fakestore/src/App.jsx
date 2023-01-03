import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import "./App.css";
import Category from "./pages/category/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
