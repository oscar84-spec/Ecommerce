import "/src/assets/css/header/header.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuToggle = () => setOpenMenu((prev) => !prev);
  return (
    <header className='header'>
      <div className='container'>
        <div className='container__menu'>
          <i className='container__menu-icon' onClick={menuToggle}>
            <FiMenu />
          </i>
          {openMenu && (
            <Fade>
              <nav className='container__menu-nav'>
                <Link to='/' className='container__menu-nav-link'>
                  Inicio
                </Link>
                <Link to='/nuevoProducto' className='container__menu-nav-link'>
                  Productos
                </Link>
                <Link to='' className='container__menu-nav-link'>
                  Nosotros
                </Link>
                <Link to='' className='container__menu-nav-link'>
                  Contacto
                </Link>
              </nav>
            </Fade>
          )}
        </div>
        <Slide>
          <Link to='/'>
            <div className='container__logo'></div>
          </Link>
        </Slide>
      </div>
      <Slide>
        <nav className='container__menu-menu'>
          <Link to='/' className='container__menu-nav-link'>
            Inicio
          </Link>
          <Link to='/nuevoProducto' className='container__menu-nav-link'>
            Productos
          </Link>
          <Link to='' className='container__menu-nav-link'>
            Nosotros
          </Link>
          <Link to='' className='container__menu-nav-link'>
            Contacto
          </Link>
        </nav>
      </Slide>
      <div className='container__cart'>
        <Slide>
          <Link to={"/carrito"} className='container__cart-icon'>
            <FaCartShopping />
          </Link>
        </Slide>
      </div>
    </header>
  );
};

export default Header;
