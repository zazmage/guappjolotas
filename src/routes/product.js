import React from "react";
import { Link } from "react-router-dom";

const Product = ({ props: { id, name, price, imgUrl } }) => {
  return (
    <Link>
      <div>
        <img src={imgUrl} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
