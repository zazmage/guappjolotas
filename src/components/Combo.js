import React, { useState } from "react";
import { ComboCont } from "../styles/StyledComp";
import ComboComp from "./ComboComp";

const Combo = ({ data, params, product, shopping, setShopping }) => {
  const [items, setItems] = useState([]);
  return (
    <ComboCont>
      <h2>Guajolocombo</h2>
      <p>
        Selecciona la {params === "bebidas" ? "bebida" : "torta"} que más te
        guste y disfruta de tu desayuno.
      </p>
      {data[params].map((el) => (
        <ComboComp
          key={el.id}
          props={el}
          shopping={shopping}
          setShopping={setShopping}
          items={items}
          setItems={setItems}
        />
      ))}
    </ComboCont>
  );
};

export default Combo;
