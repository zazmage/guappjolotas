import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import Combo from "../components/Combo";
import Flavors from "../components/Flavors";
import Slider from "../components/Slider";
import { useFetch } from "../hooks/useFetch";
import "../styles/Purchase.css";

const Purchase = () => {
  const url = "https://guappjolotas-ac.herokuapp.com/products/";
  const { data } = useFetch(url);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [shopping, setShopping] = useState({
    product: "",
    amount: 1,
    combo: [],
  });

  useEffect(() => {
    if (data !== null && data !== undefined) {
      setShopping({
        ...shopping,
        product: data[params.productType].filter(
          (el) => el.name === searchParams.get("product")
        )[0],
        amount: 1,
      });
    }
  }, [data, searchParams.get("product")]);

  const handleSubmit = () => {
    if (localStorage.getItem("shoppingCart")) {
      const previousStorage = JSON.parse(localStorage.getItem("shoppingCart"));
      previousStorage.push(shopping);
      localStorage.setItem("shoppingCart", JSON.stringify(previousStorage));
    } else {
      localStorage.setItem("shoppingCart", JSON.stringify([shopping]));
    }
  };

  return (
    <div>
      <header className="purchase-header">
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/deildujgx/image/upload/v1636935363/guappjolotas/chevron-left_wrpxtc.svg"
              alt="Atrás"
            />
          </Link>
          <Link to="/carrito">
            <img
              src="https://res.cloudinary.com/deildujgx/image/upload/v1636911028/guappjolotas/shopping-cart_dzofne.svg"
              alt="Guappjolotas"
            />
          </Link>
        </div>
      </header>
      <div>
        {data === null ? (
          <p>Cargando...</p>
        ) : (
          <Slider
            data={data}
            params={params.productType}
            product={searchParams.get("product")}
            shopping={shopping}
            setShopping={setShopping}
          />
        )}
      </div>

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

      <div>
        {data === null ? (
          <p>Cargando...</p>
        ) : //vas a programar aqui!!
        params.productType === "bebidas" ? (
          <Combo
            data={data}
            params="guajolotas"
            product={searchParams.get("product")}
            shopping={shopping}
            setShopping={setShopping}
          />
        ) : (
          <Combo
            data={data}
            params="bebidas"
            product={searchParams.get("product")}
            shopping={shopping}
            setShopping={setShopping}
          />
        )}
      </div>

      <div className="add-cart">
        <button onClick={handleSubmit}>
          <h4>Agregar al carrito</h4>
          <p>
            $
            {shopping.product.price * shopping.amount +
              shopping.combo.reduce((counter, el) => counter + el.price, 0)}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Purchase;
