import React from "react";
import { ComboCont } from "../styles/StyledComp";
import ComboComp from "./ComboComp";

const Combo = ({ data, params, product }) => {
  return (
    <ComboCont>
      <h2>Guajolocombo</h2>
      <p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
      {data[params].map((el) => (
        <ComboComp key={el.id} props={el} />
      ))}
    </ComboCont>
  );
};

export default Combo;
