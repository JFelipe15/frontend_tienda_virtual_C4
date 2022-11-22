import ActualizarTool from "./ActualizarTool";
import EliminarTool from "./EliminarTool";
import AddProductoTienda from "./AgregarTool";

function Tools(props){
    
    if (props.tools && props.tools.length > 0){
        
        let toolsElement = []

        if (props.tools.indexOf("Actualizar") >= 0){
            toolsElement.push(
                ActualizarTool({
                    path: props.path,
                    id : props.id 
                })
            ) 
        }

        if (props.tools.indexOf("Eliminar") >= 0){
            toolsElement.push(
                EliminarTool({
                    path: props.path,
                    id : props.id 
                })
            ) 
        }

        if (props.tools.indexOf("AgregarTienda") >= 0){
            toolsElement.push(
                AddProductoTienda({
                    path: props.path,
                    id : props.id 
                })
            ) 
        }


        return toolsElement;
    }
    return null
        
}

export default Tools;