import "/src/assets/css/confirmacion/confirmacion.css";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Confirmacion = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/nuevoProducto");
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <div className='confirmacion__container'>
      <div className='confirmacion__img'></div>
      <Fade>
        <h3 className='confirmacion__text'>
          Su producto se ha agregado correctamente
        </h3>
      </Fade>
    </div>
  );
};

export default Confirmacion;
