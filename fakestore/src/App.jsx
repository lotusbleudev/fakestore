import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import "./App.css";
<<<<<<< HEAD
import Category from "./pages/category/Category";
=======
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
>>>>>>> 85398561a819925fa0aa833b6c95ecea64c2f645

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/details/:id" element={<ProductDetail />} />
<<<<<<< HEAD
        <Route path="/category" element={<Category />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 85398561a819925fa0aa833b6c95ecea64c2f645
      </Routes>
    </div>
  );
}

export default App;
