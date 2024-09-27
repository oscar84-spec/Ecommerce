import { Link } from "react-router-dom";
import "/src/assets/css/producto/producto.css";

const Product = ({ product }) => {
  const { id, nombre, precio, url__img, categoria, offers, nuevoPrecio } =
    product;
  return (
    <div className='product'>
      {offers ? <div className='product__offer'>Oferta!</div> : <></>}
      <div className='product__img'>
        <img src={url__img} alt={nombre} className='product__img-img' />
      </div>
      <div className='product__info'>
        <span className='product__info-nombre'>{nombre}</span>
        <div className='product__price-container'>
          <span
            className={
              offers ? "product__info-price offers" : "product__info-price"
            }
          >
            ${precio}
          </span>
          {nuevoPrecio === 0 || nuevoPrecio === "0" ? (
            <></>
          ) : (
            <span className='product__info-newprice'>${nuevoPrecio}</span>
          )}
        </div>
      </div>
      <div className='product__tags'>
        <span className='product__tags-tag'>{categoria}</span>
      </div>
      <div className='product__buttons'>
        <Link className='product__buttons-view' to={`/producto/${id}`}>
          Ver
        </Link>
        <Link to={`/editar/${id}`} className='product__buttons-edit'>
          Editar
        </Link>
      </div>
    </div>
  );
};

export default Product;
