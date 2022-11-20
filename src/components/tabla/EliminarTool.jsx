import Eliminar from "../../img/Tabla/Tools Tabla/Eliminar.jpg";
import { Link } from "react-router-dom";

function EliminarTool(props){
    
    let url = props.path + "/" + "Eliminar" + "/" + props.id;
    
    return (
        <Link to = {url}>
            <img src = {Eliminar} alt="d" width="20" heigth = "20"></img>
        </Link>
    );

}

export default EliminarTool;