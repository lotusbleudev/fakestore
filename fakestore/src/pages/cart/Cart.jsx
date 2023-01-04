import React from "react";
import Product from "../../components/product/Product";
import { useCartContext } from "../../hooks/useCartContext";

function Cart() {
  const { products, dispatch } = useCartContext();

  console.log(products);
  return (
    <div>
      {products &&
        products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
    </div>
  );
}

export default Cart;
