import { useState, useEffect } from "react";
import "./ProducDetail.css";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function productDetail() {
  const navigate = useNavigate();
  const { dispatch } = useCartContext();
  const { id } = useParams();
  const [data, setData] = useState({});

  const refStars = useRef([]);

  const handleClick = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: data,
    });
    navigate("/");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    const stars = refStars.current.children;

    for (let i = 0; i < stars.length; i++) {
      stars[i].addEventListener("click", (e) => {
        for (let i = 0; i < e.currentTarget.dataset.id; i++) {
          stars[i].style.color = "yellow";
        }
        for (let i = e.currentTarget.dataset.id; i < stars.length; i++) {
          stars[i].style.color = "white";
        }
      });
    }
  }, []);

  return (
    <>
      <main
        style={{
          margin: "auto",
          maxWidth: "400px",
        }}
      >
        <div>
          <img style={{ width: "300px", height: "auto" }} src={data?.image} />
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
          <div ref={refStars}>
            <span className="material-symbols-outlined stars" data-id="1">
              star
            </span>
            <span className="material-symbols-outlined stars" data-id="2">
              star
            </span>
            <span className="material-symbols-outlined stars" data-id="3">
              star
            </span>
            <span className="material-symbols-outlined stars" data-id="4">
              star
            </span>
            <span className="material-symbols-outlined stars" data-id="5">
              star
            </span>
          </div>
        </div>
        <div className="add-to-cart" onClick={handleClick}>
          Add to cart
        </div>
      </main>
    </>
  );
}

export default productDetail;
