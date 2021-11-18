import React from "react";
import {
  Outlet,
  NavLink,
  useSearchParams,
  Link,
  useLocation,
} from "react-router-dom";
import { Drnwb, GlobalStyle, InputSearch, MainLogo } from "./styles/StyledComp";
import "./styles/App.scss";

// https://guappjolotas-ac.herokuapp.com/products/

const App = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation().pathname;
  return (
    <>
      <GlobalStyle />
      <header>
        <Drnwb className="main-header">
          <Link to="/">
            <MainLogo
              src="https://res.cloudinary.com/deildujgx/image/upload/v1636911027/guappjolotas/logo_qbiwpp.png"
              alt="Guappjolotas"
            />
          </Link>
          <Link to="/carrito">
            <img
              src="https://res.cloudinary.com/deildujgx/image/upload/v1636911028/guappjolotas/shopping-cart_dzofne.svg"
              alt="Carrito de compras"
            />
          </Link>
        </Drnwb>
      </header>
      <main>
        <h1>Nada como una Guajolota para empezar el día</h1>
        <InputSearch>
          <img
            src="https://res.cloudinary.com/deildujgx/image/upload/v1636987928/guappjolotas/search_v4ujum.svg"
            alt="Buscar"
          />
          <input
            type="text"
            value={searchParams.get("filter") || ""}
            placeholder="Sabor de guajolota, bebida..."
            onChange={(e) => {
              let filter = e.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
        </InputSearch>
        <Drnwb>
          <NavLink
            to="/guajolotas"
            className={({ isActive }) =>
              location === "/"
                ? "selected"
                : isActive
                ? "selected"
                : "not-selected"
            }
          >
            Guajolotas
          </NavLink>
          <NavLink
            to="/bebidas"
            className={({ isActive }) =>
              isActive ? "selected" : "not-selected"
            }
          >
            Bebidas
          </NavLink>
          <NavLink
            to="/tamales"
            className={({ isActive }) =>
              isActive ? "selected" : "not-selected"
            }
          >
            tamales
          </NavLink>
        </Drnwb>
        <Outlet />
      </main>
    </>
  );
};

export default App;
