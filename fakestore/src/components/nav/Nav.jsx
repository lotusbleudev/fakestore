import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import "./Nav.css";

const Nav = () => {
  const menu = useRef(null);
  const { products } = useCartContext();
  const [count, setCount] = useState();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleMenu = () => {
    menu.current.classList.toggle("hide");
    setOpen(!open);
  };

  useEffect(() => {
    setCount(products.length);
    console.log(products);
  }, [products]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <>
      <div className="menu hide" ref={menu}>
        <h2>Categories</h2>
        <div>
          {categories.map((categorie, i) => (
            <Link to={"category/" + categorie} key={i} onClick={handleMenu}>
              <p style={{ margin: "10px 0" }}>{categorie}</p>
            </Link>
          ))}
        </div>
      </div>
      <nav>
        <div className="flex">
          {open && (
            <span className="material-symbols-outlined" onClick={handleMenu}>
              close
            </span>
          )}
          {!open && (
            <span className="material-symbols-outlined" onClick={handleMenu}>
              menu
            </span>
          )}

          <Link to="/">
            <h1>My Store</h1>
          </Link>
        </div>
        <div className="flex">
          <p>{count}</p>
          <Link to="/cart">
            <span className="material-symbols-outlined"> shopping_cart </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
