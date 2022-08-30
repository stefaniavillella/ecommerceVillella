import './styles.css'
import './CartWidget'
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <header className="sticky-top header" style={{backgroundColor:'pink', height:'85px'}}> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="ulcontenedor" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link header__navItem" aria-current="page" href="../index.html">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__active header__navItem" href="./productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__navItem" href="./comoComprar.html">Cómo comprar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__navItem" href="./contacto.html">Contacto</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
      <div>
    <CartWidget/>
      </div>
</header>
    )
};

export default NavBar;