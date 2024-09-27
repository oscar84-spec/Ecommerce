import "/src/assets/css/quantity/quantity.css";
import { useState } from "react";

const Quantity = ({ obtenerCantidad }) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    const nuevaCatnidad = quantity + 1;
    setQuantity(nuevaCatnidad);
    obtenerCantidad(nuevaCatnidad);
  };
  const subQuantity = () => {
    const nuevaCatnidad = quantity > 1 ? quantity - 1 : 1;
    setQuantity(nuevaCatnidad);
    obtenerCantidad(nuevaCatnidad);
  };

  return (
    <div className='quan__container'>
      <button className='quan__button' onClick={subQuantity}>
        -
      </button>
      <span className='quan__number'>{quantity}</span>
      <button className='quan__button' onClick={addQuantity}>
        +
      </button>
    </div>
  );
};

export default Quantity;
