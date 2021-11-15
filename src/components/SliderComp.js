import React from "react";

const SliderComp = ({ props: { name, price, imgUrl } }) => {
  return (
    <div>
      <div>
        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
        <p>${price} MXN</p>
      </div>
      <div>
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default SliderComp;
