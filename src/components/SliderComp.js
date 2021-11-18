import React from "react";
import { SliderElem } from "../styles/StyledComp";
import { useSearchParams } from "react-router-dom";
import "../styles/Purchase.css";

const SliderComp = ({ props: { name, imgUrl }, currentProduct }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  //console.log(currentProduct.name);
  return (
    <>
      {currentProduct === null ? (
        <p>Cargando</p>
      ) : (
        <SliderElem onClick={(e) => setSearchParams({ product: name })}>
          <img
            src={imgUrl}
            alt={name}
            className={
              name === currentProduct.name ? "is-selected" : "not-selected"
            }
          />
        </SliderElem>
      )}
    </>
  );
};

export default SliderComp;
