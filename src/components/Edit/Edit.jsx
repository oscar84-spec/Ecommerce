import Categorias from "../../components/Categorias/Categorias";
import Description from "../../components/Description/Description";
import Input from "../../components/Input/Input";
import "/src/assets/css/formulario/formulario.css";
import "/src/assets/css/edit/edit.css";
import { getProductId, updateProduct } from "../../JS/fetch";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [offer, setOffer] = useState(false);
  const [newPrice, setNewPrice] = useState("0");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductId(id);
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    // Verifica que products tenga las propiedades esperadas antes de asignarlas
    if (products && Object.keys(products).length > 0) {
      setUrl(products.url__img || "");
      setName(products.nombre || "");
      setPrice(products.precio || "0");
      setDesc(products.descripcion || "");
      setCategory(products.categoria || "");
      setOffer(products.offers || false);
      setNewPrice(products.nuevoPrecio || "0");
    }
  }, [products]);

  const categorias = [
    "Celulares",
    "Computadores",
    "Consolas",
    "Electronica",
    "Videojuegos",
    "Accesorios",
    "Otros",
  ];

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  const handleOfferToggle = (e) => {
    e.preventDefault();
    setOffer(!offer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, name, price, url, desc, category, offer, newPrice);

    // Después de enviar los datos, puedes resetear el formulario si es necesario
    setUrl("");
    setName("");
    setPrice("");
    setDesc("");
    setCategory("");
    setOffer(false);
    setNewPrice("");

    if (updateProduct) {
      navigate("/nuevoProducto");
    }
  };

  return (
    <section className='edit'>
      <h3 className='form__title'>Editar Producto</h3>
      <form className='form__form' onSubmit={handleSubmit}>
        <Input
          label='Url de la imagen'
          nameLabel='url'
          tipo='url'
          valor={url}
          setValor={setUrl}
        />
        <Input
          label='Nombre'
          nameLabel='nombre'
          tipo='text'
          valor={name}
          setValor={setName}
        />
        <Input
          label='Precio'
          nameLabel='precio'
          tipo='number'
          valor={price}
          setValor={setPrice}
        />
        {offer ? (
          <div className='offer__container'>
            <Input
              label='Nuevo Precio'
              nameLabel='newPrecio'
              tipo='number'
              valor={newPrice}
              setValor={setNewPrice}
            />
            <button
              className='form__button-cancel-offer'
              onClick={handleOfferToggle}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button className='form__offer' onClick={handleOfferToggle}>
            Agregar oferta
          </button>
        )}

        <Categorias
          valor={category}
          setValor={setCategory}
          lista={categorias}
        />
        <Description valor={desc} setValor={setDesc} />
        <div className='form__buttons'>
          <button type='submit' className='form__button-add'>
            Guardar
          </button>
          <button type='reset' className='form__button-cancel'>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Edit;
