import { useState, useEffect } from "react";
import "./ProducDetail.css";
import { useParams } from "react-router-dom";

function productDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  console.log(id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <nav>
        <div className="flex">
          <span className="material-symbols-outlined"> menu </span>
          <h1>My Store</h1>
        </div>
        <div className="flex">
          <p>0</p>
          <span className="material-symbols-outlined"> shopping_cart </span>
        </div>
      </nav>
      <main>
        <div className="image">image</div>
        <div
          className="flex"
          style={{ justifyContent: "space-between", padding: "1em 0" }}
        >
          <h2>{data ? data.title : ""}</h2>
          <p>{data ? data.price : ""}</p>
        </div>
        <p style={{ paddingBottom: "10px" }}>{data ? data.category : ""}</p>

        <p>{data ? data.description : ""}</p>
        <div className="category">
          <p>{data ? data.category : ""}</p>
          <div>
            <span className="material-symbols-outlined"> star </span>
            <span className="material-symbols-outlined"> star </span>
            <span className="material-symbols-outlined"> star </span>
            <span className="material-symbols-outlined"> star </span>
            <span className="material-symbols-outlined"> star </span>
          </div>
        </div>
        <div className="add-to-cart">Add to cart</div>
      </main>
    </>
  );
}

export default productDetail;
