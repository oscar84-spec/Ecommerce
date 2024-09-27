import "/src/assets/css/cart/cart.css";
import { useState } from "react";

const Cart = () => {
  const producto = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className='cart__container'>
      {producto === null ? (
        <div className='cart__empty'>
          <h2 className='cart__empty-title'>Tu carrito esta vacío</h2>
        </div>
      ) : (
        <table className='cart__table'>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {producto.map((item) => (
              <tr className='cart__table-row' key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.quantity}</td>
                <td>$ {item.quantity * item.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
