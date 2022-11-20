import { Link } from "react-router-dom";

function Footer(props){
    return(
        <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <a>
                   <Link to = "/" className = "nav-link px-2 text-muted">  Home </Link>
                </a>
            </li>
            <li class="nav-item">
                <a>
                  <Link to = "/contactanos" className = "nav-link px-2 text-muted">  Contáctanos </Link> 
                </a>
            </li>
            </ul>
            <p class="text-center text-muted">© 2022 La Caucanita Patoja, Inc</p>
        </footer>
        </div>

    );
}

export default Footer;