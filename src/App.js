import React from "react";
import { Outlet, NavLink, useSearchParams } from "react-router-dom";

// https://guappjolotas-ac.herokuapp.com/products/

const App = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <header>
        <NavLink to="">
          <img src="https://res.cloudinary.com/deildujgx/image/upload/v1636911027/guappjolotas/logo_qbiwpp.png" />
        </NavLink>
        <NavLink to="">Carrito</NavLink>
      </header>
      <main>
        <h1>Soy App</h1>
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <nav>
          <NavLink to="/guajolotas">Guajolotas</NavLink>
          <NavLink to="/bebidas">Bebidas</NavLink>
          <NavLink to="/tamales">tamales</NavLink>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default App;
