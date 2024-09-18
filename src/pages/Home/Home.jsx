import Card from "../../components/Card/Card";
import "/src/assets/css/home/home.css";
const Home = () => {
  const cards = [
    {
      title: "Nuevos Productos",
      text: "Echale un vistazo a nuestro nuevo catalogo de productos",
      button: "Productos Nuevos",
      color: "#528880",
      route: "/nuevoProducto",
    },
    {
      title: "Ofertas",
      text: "Echale un vistazo a nuestra nueva seccion de ofertas",
      button: "Ofertas",
      color: "#58af89",
      route: "/ofertas",
    },
  ];

  return (
    <section className='home'>
      <div className='home__container'>
        <h1 className='home__container-title'>Bienvenid@ a CompraTodo</h1>
        <p className='home__container-title-text'>
          Encontrá los mejores productos de todo el mundo en nuestra tienda
        </p>
        <ul className='home__container-cards'>
          {cards.map(({ title, text, button, color, route }, i) => (
            <li key={i}>
              <Card
                title={title}
                text={text}
                button={button}
                color={color}
                route={route}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
