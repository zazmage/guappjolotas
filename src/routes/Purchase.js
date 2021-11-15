import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Combo from "../components/Combo";
import Flavors from "../components/Flavors";
import Slider from "../components/Slider";
import { useFetch } from "../hooks/useFetch";

const Purchase = () => {
  const url = "https://guappjolotas-ac.herokuapp.com/products/";
  const { data } = useFetch(url);
  const params = useParams();
  const [searchParams] = useSearchParams();
  return (
    <div>
      <div>
        {data === null ? (
          <p>Cargando...</p>
        ) : (
          <Slider
            data={data}
            params={params.productType}
            product={searchParams.get("product")}
          />
        )}
      </div>
      <h2>Sabor</h2>
      <div></div>
      <div>
        {data === null ? (
          <p>Cargando...</p>
        ) : (
          <Flavors
            data={data}
            params={params.productType}
            product={searchParams.get("product")}
          />
        )}
      </div>
      <h2>Guajolocombo</h2>
      <div>
        {data === null ? (
          <p>Cargando...</p>
        ) : (
          <Combo
            data={data}
            params={params.productType}
            product={searchParams.get("product")}
          />
        )}
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Purchase;
