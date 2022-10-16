import './styles.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png';

const NavBar = () => {
    return (
        <header className="sticky-top header" style={{height:'85px'}}> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
        <Link to="/">
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
      </div>
      <div className="container-fluid">
        <div className="ulcontenedor" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <Link className="nav-item nav-link header__navItem" to={'/'}>Inicio</Link>
            <Link className="nav-item nav-link header__navItem" to="/productos/cumpleaños">Cumpleaños</Link>
            <Link className="nav-item nav-link header__navItem" to="/productos/bautismo">Bautismos</Link>
            <Link className="nav-item nav-link header__navItem" to="/productos/comunión">Comuniones</Link>
            
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