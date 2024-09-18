import Categorias from "../../components/Categorias/Categorias";
import Description from "../../components/Description/Description";
import Input from "../../components/Input/Input";
import "/src/assets/css/formulario/formulario.css";
import { useState } from "react";
import { addProduct } from "../../JS/fetch";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const [url__img, setUrlImg] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  const navigate = useNavigate();

  const categorias = [
    "Celulares",
    "Computadores",
    "Consolas",
    "Electronica",
    "Videojuegos",
    "Accesorios",
    "Otros",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(nombre, precio, url__img, descripcion, categoria);
    setUrlImg("");
    setNombre("");
    setPrecio("");
    setDescripcion("");
    setCategoria("");

    if (addProduct) {
      navigate("/");
    }
  };
  return (
    <section className='form'>
      <h3 className='form__title'>Agregar un nuevo Producto</h3>
      <form action='' className='form__form' onSubmit={handleSubmit}>
        <Input
          label='Url de la imagen'
          nameLabel='url'
          tipo='url'
          valor={url__img}
          setValor={setUrlImg}
        />
        <Input
          label='Nombre'
          nameLabel='nombre'
          tipo='text'
          valor={nombre}
          setValor={setNombre}
        />
        <Input
          label='Precio'
          nameLabel='precio'
          tipo='number'
          valor={precio}
          setValor={setPrecio}
        />
        <Categorias
          valor={categoria}
          setValor={setCategoria}
          lista={categorias}
        />
        <Description valor={descripcion} setValor={setDescripcion} />
        <div className='form__buttons'>
          <button type='submit' className='form__button-add'>
            Agregar
          </button>
          <button type='reset' className='form__button-cancel'>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
