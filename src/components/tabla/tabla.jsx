import Header from "./Header";
import Body from "./Body";

function Tabla(props){
    //<Tabla  
    //    props.data = {datosTabla}
    //    props.name = {"Tabla de Usuarios"}  
    //    props.columns = {["id", "firstName", "email", "username", "password"]}
    //    props.columnsAlias = {[ "ID", "Nombre" , "Correo", "Usuario", "Contraseña" ]}
    //    props.tools = {["Actualizar", "Eliminar"]}
    //    props.tools = {props.tools}
    ///>
    return (
        <div className="mx-5 p-4"> {/* mx-5 para colocarle margenes hacia la derecha e izquierda */}
            <table class="table">
                <caption>{props.name}</caption> {/* Coloca el nombre -->Tabla de Usuarios */}
                    <Header columns = {props.columnsAlias}  tools = {props.tools}/>
                    <Body 
                        path = {props.path}
                        data = {props.data} 
                        columns = {props.columns} 
                        tools = {props.tools}
                    />
                </table>
            
        </div>
    );  
}

export default Tabla;



