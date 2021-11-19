import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopCart, ShopCartCont } from "../styles/StyledComp";

const ShoppingCart = () => {
  const currentShopping = JSON.parse(localStorage.getItem("shoppingCart"));
  const getProdTable = () => {
    const productNames = [];
    const tableValues = {};
    currentShopping.forEach((i) => {
      if (!(i.product.name in productNames)) {
        productNames.push(i.product.name);
      }
      i.combo.forEach((j) => {
        if (!(j.name in productNames)) {
          productNames.push(j.name);
        }
      });
    });
    productNames.forEach((el) => (tableValues[el] = { amount: 0, price: 0 }));
    currentShopping.forEach((i) => {
      tableValues[i.product.name].amount += i.amount;
      tableValues[i.product.name].price =
        tableValues[i.product.name].amount * i.product.price;
      i.combo.forEach((j) => {
        tableValues[j.name].amount += 1;
        tableValues[j.name].price =
          tableValues[i.product.name].amount * j.price;
      });
    });
    // console.log(tableValues);
    return tableValues;
  };
  //console.log(currentShopping);

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
        {currentShopping.length ? (
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        ) : (
          <div className="not-products">
            <img
              src="https://res.cloudinary.com/deildujgx/image/upload/v1636911028/guappjolotas/shopping-cart_dzofne.svg"
              alt="Carrito de compras"
            />
            <p>No hay productos</p>
          </div>
        )}

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
