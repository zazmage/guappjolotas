import React from "react";
import { Drnwl, ProdListItem } from "../styles/StyledComp";

const Product = ({ props: { id, name, price, imgUrl } }) => {
  return (
    <ProdListItem>
      <Drnwl>
        <img src={imgUrl} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>${price} MXN</p>
        </div>
      </Drnwl>
    </ProdListItem>
  );
};

export default Product;
