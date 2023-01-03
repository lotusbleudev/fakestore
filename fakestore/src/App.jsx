import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import "./App.css";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
