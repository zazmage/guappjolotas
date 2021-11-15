import React from "react";

const ComboComp = ({ props: { name, price, imgUrl } }) => {
  return (
    <div>
      <div>
        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
        <p>+ ${price} MXN</p>
      </div>
      <input type="checkbox" name="" id="" />
    </div>
  );
};

export default ComboComp;
