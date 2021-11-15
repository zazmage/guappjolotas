import React from "react";

const ShoppingCart = () => {
  return (
    <div>
      <header>
        <img
          src="https://res.cloudinary.com/deildujgx/image/upload/v1636935363/guappjolotas/chevron-left_wrpxtc.svg"
          alt="Atrás"
        />
        <h2>Carrito</h2>
      </header>
      <main>
        <div>Productos</div>
        <button>Pagar</button>
      </main>
    </div>
  );
};

export default ShoppingCart;
