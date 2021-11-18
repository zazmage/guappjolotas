import React from "react";
import { FlavorCont } from "../styles/StyledComp";

const Flavors = ({ data, params, product }) => {
  return (
    <FlavorCont>
      <h2>Sabor</h2>
      <div>
        {data[params].map((el) => (
          <img key={el.id} src={el.flavorUrl} alt={el.name} />
        ))}
      </div>
    </FlavorCont>
  );
};

export default Flavors;
