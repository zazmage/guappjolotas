import React from "react";
import ComboComp from "./ComboComp";

const Combo = ({ data, params, product }) => {
  return (
    <div>
      <h3>Soy un combo</h3>
      {data[params].map((el) => (
        <ComboComp key={el.id} props={el} />
      ))}
    </div>
  );
};

export default Combo;
