import { Link } from "react-router-dom";
import "/src/assets/css/producto/producto.css";

const Product = ({ product }) => {
  const { nombre, precio, url__img, categoria } = product;
  return (
    <div className='product'>
      <div className='product__img'>
        <img src={url__img} alt={nombre} className='product__img-img' />
      </div>
      <div className='product__info'>
        <span className='product__info-nombre'>{nombre}</span>
        <span className='product__info-price'>${precio}</span>
      </div>
      <div className='product__tags'>
        <span className='product__tags-tag'>{categoria}</span>
      </div>
      <div className='product__buttons'>
        <Link className='product__buttons-view'>Ver</Link>
        <Link className='product__buttons-edit'>Editar</Link>
      </div>
    </div>
  );
};

export default Product;
