import React, { useState, useEffect } from "react";
import SliderComp from "./SliderComp";
import { ProdInfo, SliderCont } from "../styles/StyledComp";
import { useSearchParams } from "react-router-dom";

const Slider = ({ data, params, product }) => {
  //console.log(data, params, product);
  //const currentProd = data[params].filter((el) => el.name === product)[0];
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setCurrentProduct(data[params].filter((el) => el.name === product)[0]);
  }, [searchParams.get("product")]);

  //console.log(data[params].find((el) => (el.name = product)));

  const getToRender = () => {
    const toRender = [];
    const productSelected = data[params].find((el) => el.name === product);

    if (productSelected.id === 0) {
      toRender.push(data[params].slice(-1)[0]);
      toRender.push(productSelected);
      toRender.push(data[params][productSelected.id + 1]);
    } else if (productSelected.id === data[params].length - 1) {
      toRender.push(data[params][productSelected.id - 1]);
      toRender.push(productSelected);
      toRender.push(data[params][0]);
    } else {
      for (let i = productSelected.id - 1; i <= productSelected.id + 1; i++) {
        toRender.push(data[params][i]);
      }
    }
    return toRender;
  };

  const prodToRender = getToRender();

  return (
    <div>
      <SliderCont>
        {prodToRender.map((el) => (
          <SliderComp key={el.id} props={el} currentProduct={currentProduct} />
        ))}
      </SliderCont>
      {currentProduct === null ? (
        <p>Cargando...</p>
      ) : (
        <ProdInfo>
          <h3>Guajolota de Tamal {currentProduct.name}</h3>
          <p>${currentProduct.price} MXN</p>
          <div>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </ProdInfo>
      )}
    </div>
  );
};

export default Slider;
