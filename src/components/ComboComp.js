import React from "react";
import { ComboItem } from "../styles/StyledComp";

const ComboComp = ({
  props,
  props: { name, price, imgUrl },
  shopping,
  setShopping,
  /* items,
  setItems, */
}) => {
  /* const handleChecked = (e) => {
    if (e.target.checked) {
      setItems([...items, props]);
    } else {
      setItems([...items].filter((el) => el.name !== e.target.name));
    }
  }; */
  const handleChecked = (e) => {
    if (e.target.checked) {
      setShopping({ ...shopping, combo: [...shopping.combo, props] });
    } else {
      setShopping({
        ...shopping,
        combo: [...shopping.combo].filter((el) => el.name !== e.target.name),
      });
    }
  };
  return (
    <ComboItem>
      <label htmlFor={name}>
        <div>
          <img src={imgUrl} alt={name} />
          <h3>{name}</h3>
          <p>+ ${price} MXN</p>
        </div>
      </label>
      <input onClick={handleChecked} type="checkbox" name={name} id={name} />
    </ComboItem>
  );
};

export default ComboComp;
