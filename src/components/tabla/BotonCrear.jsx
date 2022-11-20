import { Link } from "react-router-dom";


function BotonCrear(props){

    let url = props.path + "/crearUsuarios";
   
    
    return (
        <Link to = {url}>
                <button className="btn btn-success ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Crear</button>
                
        </Link>
    );
}

export default BotonCrear;