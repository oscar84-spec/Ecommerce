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
                <a href='' className='container__menu-nav-link'>
                  Inicio
                </a>
                <a href='' className='container__menu-nav-link'>
                  Productos
                </a>
                <a href='' className='container__menu-nav-link'>
                  Nosotros
                </a>
                <a href='' className='container__menu-nav-link'>
                  Contacto
                </a>
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
          <a href='' className='container__menu-nav-link'>
            Inicio
          </a>
          <a href='' className='container__menu-nav-link'>
            Productos
          </a>
          <a href='' className='container__menu-nav-link'>
            Nosotros
          </a>
          <a href='' className='container__menu-nav-link'>
            Contacto
          </a>
        </nav>
      </Slide>
      <div className='container__cart'>
        <Slide>
          <i className='container__cart-icon'>
            <FaCartShopping />
          </i>
        </Slide>
      </div>
    </header>
  );
};

export default Header;
