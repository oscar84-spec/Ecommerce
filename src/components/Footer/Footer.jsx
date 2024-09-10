import "/src/assets/css/footer/footer.css";

const Footer = () => (
  <footer className='footer'>
    <div className='footer__about'>
      <h3 className='footer__about-title'>Sobre Nosotros</h3>
      <p className='footer__about-text'>
        Estamos dedicados a brindarle la mejor experiencia de compra, la mejor
        calidad de productos y el mejor servicio
      </p>
    </div>
    <div className='footer__contact'>
      <h3 className='footer__contact-title'>Contacto</h3>
      <span className='footer__contact-text'>Email: info@compratodo.com</span>
      <span className='footer__contact-text'>Tel: 555-555-555</span>
    </div>
    <div className='footer__follow'>
      <h3 className='footer__follow-title'>Siguenos</h3>
      <ul className='footer__follow-links'>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Youtube</li>
      </ul>
    </div>
    <div className='footer__rights'>
      <p className='footer__rights-text'>
        © Todos los derechos reservados 2024
      </p>
    </div>
  </footer>
);

export default Footer;
