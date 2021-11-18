import React from "react";
import { ComboItem } from "../styles/StyledComp";

const ComboComp = ({ props: { name, price, imgUrl } }) => {
  return (
    <ComboItem>
      <div>
        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
        <p>+ ${price} MXN</p>
      </div>
      <input type="checkbox" name="" id="" />
    </ComboItem>
  );
};

export default ComboComp;
