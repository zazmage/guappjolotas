import React from "react";
import { Outlet, NavLink, useSearchParams, Link } from "react-router-dom";
import { Drnwb, GlobalStyle, MainLogo } from "./styles/StyledComp";
import "./styles/App.scss";

// https://guappjolotas-ac.herokuapp.com/products/

const App = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <GlobalStyle />
      <header>
        <Drnwb className={"main-header"}>
          <Link to="/">
            <MainLogo
              src="https://res.cloudinary.com/deildujgx/image/upload/v1636911027/guappjolotas/logo_qbiwpp.png"
              alt="Guappjolotas"
            />
          </Link>
          <Link to="/carrito">
            <img
              src="https://res.cloudinary.com/deildujgx/image/upload/v1636911028/guappjolotas/shopping-cart_dzofne.svg"
              alt="Guappjolotas"
            />
          </Link>
        </Drnwb>
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
