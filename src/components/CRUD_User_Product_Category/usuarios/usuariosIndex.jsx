import Tabla from "../../tabla/tabla";
import { getData } from "../../../js/getData";
import MainPage from "../../tabla/MainPage";
import ActualizarTool from "../../tabla/ActualizarTool";



function UsuariosIndex(props) {
    let datosTabla = getData("url",{},"get",{})
    
    return (
        <div>
            <h3 className="p-3">Lista Usuarios</h3>
            <p>Bienvenidos a la pagina de administracion de usuarios</p>
            
            <MainPage  
                data = {datosTabla}
                path = {"/listaUsuarios"}
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
                tools = {["Crear" , "Actualizar", "Eliminar"]}
               
            />
           
            
        </div>
    );
}

export default UsuariosIndex;