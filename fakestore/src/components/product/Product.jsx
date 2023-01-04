import React from "react";
import { useCartContext } from "../../hooks/useCartContext";

function Product({ product }) {
  const { dispatch } = useCartContext();

  const handleDelete = (e) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: product,
    });
  };
  return (
    <div
      key={product.id}
      style={{
        display: "flex",
        maxWidth: "700px",
        margin: "auto",
        gap: "20px",
      }}
    >
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <div
        style={{ backgroundColor: "red", padding: "5px", width: "fit-content" }}
        onClick={handleDelete}
      >
        Delete
      </div>
    </div>
  );
}

export default Product;
