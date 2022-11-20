import Tabla from "../tabla/tabla";
import { getData } from "../../js/getData";
import MainPage from "../tabla/MainPage";
import ActualizarTool from "../tabla/ActualizarTool";



function UsuariosIndex(props) {
    let datosTabla = getData("url",{},"get",{})
    
    return (
        <div>
            <h3 className="p-3">Usuarios</h3>
            <p>Bienvenidos a la pagina de administracion de usuarios</p>
            
            <MainPage  
                data = {datosTabla}
                path = {"/usuarios"}
                name = {"Tabla de Usuarios"}  
                columns = {["id", "firstName","lastName", "email", "username", "password"]}
                columnsAlias = 
                {
                    [
                        "ID", 
                        "Nombres" , 
                        "Apellidos",
                        "Correo", 
                        "Usuario", 
                        "Contraseña"
                    ]
                }
                tools = {["Actualizar", "Eliminar"]}
               
            />
           
            
        </div>
    );
}

export default UsuariosIndex;