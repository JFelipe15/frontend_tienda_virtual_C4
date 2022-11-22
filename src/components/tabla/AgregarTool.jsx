import { Link } from "react-router-dom";

import AgregarProductoTienda from "../../img/Tabla/Tools Tabla/AgregarTienda.png"


function AddProductoTienda(props){
    
    let url = "/productos"; 
    
    
    return (
        <Link to = {url}>
            {/*<button className="btn btn-success ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">*/}
                <img src = {AgregarProductoTienda} alt="a" width="40" heigth = "40" ></img>      
            {/*</button>*/}
            
        </Link>
    );

}

export default AddProductoTienda;