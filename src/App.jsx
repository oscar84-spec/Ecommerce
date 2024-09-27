import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "/src/assets/css/variables.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewProduct from "./pages/newProduct/NewProduct";
import Footer from "./components/Footer/Footer";
import Formulario from "./pages/Form/Form";
import Confirmacion from "./components/Confirmacion/Confirmacion";
import VerProducto from "./pages/verProducto/VerProducto";
import Cart from "./pages/Cart/Cart";
import Edit from "./components/Edit/Edit";
import Ofertas from "./pages/Ofertas/Ofertas";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuevoProducto' element={<NewProduct />} />
        <Route path='/agregarProducto' element={<Formulario />} />
        <Route path='/producto/:id' element={<VerProducto />} />
        <Route path='/confirmacion' element={<Confirmacion />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/editar/:id' element={<Edit />} />
        <Route path='/ofertas' element={<Ofertas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
