import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import "/src/assets/css/nuevoProducto/nuevo_producto.css";
import Product from "../../components/Product/Product";
import { getProducts } from "../../JS/fetch";
import { useEffect, useState } from "react";

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
      };
      fetchProducts();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  if (!products) {
    return <h2>No hay productos</h2>;
  }
  return (
    <section className='newProduct'>
      <div className='newProduct__title'>
        <h3 className='newProduct__title-text'>Nuevos Productos</h3>
        <Link to='/agregarProducto'>
          <button className='newProduct__add'>
            <IoIosAdd /> <span className='newProduct__add-text'>Añadir</span>
          </button>
        </Link>
      </div>
      <div className='newProduct__container'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewProduct;
