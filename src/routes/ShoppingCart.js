import React from "react";
import { Link } from "react-router-dom";
import { ShopCart, ShopCartCont } from "../styles/StyledComp";

const ShoppingCart = () => {
  return (
    <ShopCartCont>
      <header>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/deildujgx/image/upload/v1636935363/guappjolotas/chevron-left_wrpxtc.svg"
            alt="Atrás"
          />
        </Link>
        <h2>Carrito</h2>
      </header>
      <ShopCart>
        <div className="not-products">
          <img
            src="https://res.cloudinary.com/deildujgx/image/upload/v1636911028/guappjolotas/shopping-cart_dzofne.svg"
            alt="Carrito de compras"
          />
          <p>No hay productos</p>
        </div>
        <div className="pay-cont">
          <button>
            <h4>Pagar</h4>
          </button>
        </div>
      </ShopCart>
    </ShopCartCont>
  );
};

export default ShoppingCart;
