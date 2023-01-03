import { useState, useEffect } from "react";
import "./ProducDetail.css";
import { useParams } from "react-router-dom";

function productDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <main>
        <div>
          <img style={{ width: "100%", maxWidth: "400px" }} src={data?.image} />
        </div>
        <div
          className="flex"
          style={{ justifyContent: "space-between", padding: "1em 0" }}
        >
          <h2>{data?.title}</h2>
          <p>{data?.price}</p>
        </div>
        <p style={{ paddingBottom: "10px" }}>{data ? data.category : ""}</p>

        <p>{data?.description}</p>
        <div className="category">
          <p>{data?.category}</p>
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
