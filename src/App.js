import React from "react";
import { Outlet, Link } from "react-router-dom";
import mole from "./assets/mole.svg";

const App = () => {
  return (
    <>
      <header>
        <Link to="">
          <img src={mole} style={{ opacity: "0.1" }} />
        </Link>
        <Link to="">Carrito</Link>
      </header>
      <main>
        <h1>Soy App</h1>
        <input type="text" />
        <nav>
          <Link to="">Guajolotas</Link>
          <Link to="">Bebidas</Link>
          <Link to="">tamales</Link>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default App;
