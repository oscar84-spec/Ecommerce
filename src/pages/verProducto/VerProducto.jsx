import { useParams, Link } from "react-router-dom";
import { getProductId } from "../../JS/fetch";
import { useEffect, useState } from "react";
import "/src/assets/css/producto_ver/producto_ver.css";
import Rating from "../../components/Rating/Rating";
import Quantity from "../../components/Quantity/Quantity";

const VerProducto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    try {
      const obtenerProducto = async () => {
        const data = await getProductId(id);
        setProduct(data);
      };
      obtenerProducto();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  const { url__img, nombre, precio, descripcion } = product;

  const obtenerCantidad = (cantidad) => setQuantity(cantidad);

  const handleSubmit = () => {
    alert("Se agregó al carrito");

    // Recuperamos el carrito del localStorage
    const cartData = localStorage.getItem("cart");

    // Intentamos parsear el cartData, si es un array, lo usamos, sino, lo inicializamos como un array vacío
    let cart = [];

    try {
      cart = cartData ? JSON.parse(cartData) : [];
    } catch (e) {
      console.error("Error al parsear el carrito", e);
      cart = [];
    }

    // Validamos que cart es un array antes de usar some
    if (!Array.isArray(cart)) {
      cart = [];
    }

    // Si el producto ya existe en el carrito, actualizamos su cantidad
    if (cart.some((item) => item.id === id)) {
      cart.forEach((item) => {
        if (item.id === id) {
          item.quantity += quantity;
        }
      });
    } else {
      // Si no existe, añadimos un nuevo producto
      const nuevoProducto = {
        id,
        nombre,
        precio,
        quantity,
      };
      cart.push(nuevoProducto);
    }

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <section className='producto'>
      <div className='producto__container-imgs'>
        <div className='producto__img'>
          <img src={url__img} alt={nombre} className='producto__img-img' />
        </div>
        <div className='producto__bgImg'>
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={url__img}
              alt={nombre}
              className='producto__bgImg-img'
            />
          ))}
        </div>
      </div>
      <div className='producto__container-info'>
        <h2 className='producto__nombre'>{nombre}</h2>
        <Rating />
        <span className='producto__price'>${precio}</span>
        <p className='producto__descripcion'>{descripcion}</p>
        <Quantity obtenerCantidad={obtenerCantidad} />
        <button
          type='submit'
          className='producto__button'
          onClick={handleSubmit}
        >
          Agregar al carrito
        </button>
      </div>
    </section>
  );
};

export default VerProducto;
