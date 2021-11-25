import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import "@styles/ProductItem.scss";

import buttonAddToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  //para agregar el item con useContext al dar click el el boton de agregar
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={buttonAddToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
