import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import "/src/assets/css/ofertas/ofertas.css";
import { getOffers } from "../../JS/fetch";
import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";

const Ofertas = () => {
  const [ofertas, setOfertas] = useState([]);
  useEffect(() => {
    const fetchOffers = async () => {
      const data = await getOffers();
      setOfertas(data);
    };
    fetchOffers();
  }, []);

  return (
    <section className='ofertas'>
      <div className='ofertas__container'>
        <div className='ofertas__title'>
          <h1 className='ofertas__title-title'>Ofertas</h1>
          <Link to='/ofertas'>
            <button className='newProduct__add'>
              <IoIosAdd /> <span className='newProduct__add-text'>Añadir</span>
            </button>
          </Link>
        </div>
        <div className='ofertas__productos'>
          {ofertas.map((oferta) => (
            <Product key={oferta.id} product={oferta} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
