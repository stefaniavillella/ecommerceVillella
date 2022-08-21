import './styles.css'
const NavBar = () => {
    return (
        <header class="sticky-top header" style={{backgroundColor:'pink'}}> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        
        <div class="ulcontenedor" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <a class="nav-link header__navItem" aria-current="page" href="../index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link header__active header__navItem" href="./productos">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link header__navItem" href="./comoComprar.html">Cómo comprar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link header__navItem" href="./contacto.html">Contacto</a>
            </li>
          </ul>
          <form class="d-flex">
            
          </form>
            <button id="total" class="btn btn-outline-success header__botonBusqueda" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg> Cart $0
            </button>


           
        </div>
      </div>
    </nav>
</header>
    )
};

export default NavBar;