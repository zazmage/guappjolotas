import React from "react";

const Product = ({ props: { id, name, price, imgUrl } }) => {
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product;