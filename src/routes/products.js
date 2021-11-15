import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Product from "../components/Product";

// https://guappjolotas-ac.herokuapp.com/products/

const Products = () => {
  const url = "https://guappjolotas-ac.herokuapp.com/products/";
  const { data } = useFetch(url);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  return (
    <div>
      {data === null ? (
        <p>Cargando...</p>
      ) : location.pathname === "/" ? (
        data.guajolotas.map((el) => (
          <Link key={el.id} to={`/compras/guajolotas?product=${el.name}`}>
            <Product props={el} />
          </Link>
        ))
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
          .map((el) => (
            <Link
              style={{ textDecoration: "none" }}
              key={el.id}
              to={`/compras/${location.pathname.slice(1)}?product=${el.name}`}
            >
              <Product props={el} />
            </Link>
          ))
      )}
    </div>
  );
};

export default Products;
