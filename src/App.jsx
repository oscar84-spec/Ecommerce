import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "/src/assets/css/variables.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewProduct from "./pages/newProduct/NewProduct";
import Footer from "./components/Footer/Footer";
import Formulario from "./pages/Form/Form";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuevoProducto' element={<NewProduct />} />
        <Route path='/agregarProducto' element={<Formulario />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
