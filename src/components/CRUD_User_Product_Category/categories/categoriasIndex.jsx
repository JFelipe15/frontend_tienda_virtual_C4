import Tabla from "../../tabla/tabla";
import { getDataCategories } from "../../../js/getDataCategorias";
import MainPage from "../../tabla/MainPage";
import ActualizarTool from "../../tabla/ActualizarTool";

function CategoriasIndex(props) {
    let datosTabla = getDataCategories("url",{},"get",{})
    
    return (
        <div>
            <h3 className="p-3">Lista Categorías</h3>
            <p>Bienvenidos a la pagina de administracion de Categorías</p>
            
            <MainPage  
                data = {datosTabla}
                path = {"/listaCategorias"}
                name = {"Tabla de Usuarios"}  
                columns = {["id","category", "title", "description", "price","stock",]}
                columnsAlias = 
                {
                    [
                        "ID", 
                        "Categoría",
                        "Producto" ,
                        "Descripcion",
                        "Precio",
                        "Stock",
                        
                        
                    ]
                }
                tools = {["Crear" , "Actualizar", "Eliminar"]} 
            />
        </div>
    );
}

export default CategoriasIndex;