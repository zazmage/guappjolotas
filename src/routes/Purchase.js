import React from "react";
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
        ) : (
          <Combo
            data={data}
            params={params.productType}
            product={searchParams.get("product")}
          />
        )}
      </div>

      <div className="add-cart">
        <button>
          <h4>Agregar al carrito</h4>
          <p>${"precio"}</p>
        </button>
      </div>
    </div>
  );
};

export default Purchase;
