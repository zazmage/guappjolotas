import React, { useState } from "react";
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Product from "./product";

// https://guappjolotas-ac.herokuapp.com/products/

const Products = () => {
  const url = "https://guappjolotas-ac.herokuapp.com/products/";
  const { data } = useFetch(url);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  return (
    <div>
      <h2>Soy el products</h2>
      {data === null ? (
        <p>Cargando...</p>
      ) : location.pathname === "/" ? (
        data.guajolotas.map((el) => <Product key={el.id} props={el} />)
      ) : (
        data[location.pathname.slice(1)]
          .filter((el) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = el.name.toLowerCase();
            return (
              name.startsWith(filter.toLocaleLowerCase()) ||
              name.includes(filter.toLocaleLowerCase())
            );
          })
          .map((el) => <Product key={el.id} props={el} />)
      )}
    </div>
  );
};

export default Products;
