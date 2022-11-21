import Editar from "../../img/Tabla/Tools Tabla/Editar.jpg";
import { Link } from "react-router-dom";


function ActualizarTool(props){
    
    let url = props.path  + "/Actualizar/" + props.id;  
    
    
    return (
        <Link to = {url}>
            {/*<button className="btn btn-success ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">*/}
                <img src = {Editar} alt="e" width="20" heigth = "20" ></img>      
            {/*</button>*/}
            
        </Link>
    );

}

export default ActualizarTool;