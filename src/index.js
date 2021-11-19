import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./routes/Products.js";
import Purchase from "./routes/Purchase.js";
import ShoppingCart from "./routes/ShoppingCart.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Products />} />
          <Route path="/guajolotas" element={<Products />} />
          <Route path="/bebidas" element={<Products />} />
          <Route path="/tamales" element={<Products />} />
        </Route>
        <Route path="/compras">
          <Route path=":productType" element={<Purchase />} />
        </Route>
        <Route path="/carrito" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
