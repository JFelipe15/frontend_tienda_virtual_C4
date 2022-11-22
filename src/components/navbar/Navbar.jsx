import Logo_Tienda from "./Logo1Caucanita_sin_fondo.png"
import Login_Icono from "./Login_Icono_Modificado-removebg-preview.png"
import Carrito_Compras from "./CarritoCompras.png"
import Imagen_Fondo from "./ImgenFondoAlimentosNegra.png"


//Librerias

import { Link } from "react-router-dom"

function Navbar(){
    return(
        
        <header class="p-3 text-bg-warning" src={Imagen_Fondo} width="100">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img src={Logo_Tienda} alt="" width="100"/>
            </a>
    
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                  <a>
                        <Link to = {"/react"} className="nav-link px-2 text-secondary"> React </Link>
                    </a>
                </li>


                <li>
                    <a>
                        <Link to = {"/"} className="nav-link px-2 text-secondary"> Home </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/productos"} className ="nav-link px-2 text-black"> Productos </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/categorias"} className ="nav-link px-2 text-black"> Categorias </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/nosotros"} className ="nav-link px-2 text-black"> Nosotros </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/listaUsuarios"} className ="nav-link px-2 text-black">Lista Usuarios </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/listaProductos"} className ="nav-link px-2 text-black">Lista Productos </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/listaCategorias"} className ="nav-link px-2 text-black">Lista Categorias </Link>
                    </a>
                </li>
                
            </ul>

    
            {/*<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-5" role="search">
              <input type="search" class="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"/>
            </form>*/}
          
            <div class="text-end">
                <a>
                  <Link to = {"/carritoCompras"}>
                        <img type="button" src= {Carrito_Compras} alt="" width="50"/> 
                  </Link>
                </a>
                <a>
                  <Link to = {"/login"}>
                    <img type="button" src={Login_Icono} class="btn me-2" width="100"/>
                  </Link>
                </a>
            </div>
          </div>
        </div>
      </header>

    );
}

export default Navbar;