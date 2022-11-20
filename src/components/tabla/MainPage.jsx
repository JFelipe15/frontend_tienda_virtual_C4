import Tabla from "./tabla";
import BotonCrear from "../tabla/BotonCrear";
import BarraBusqueda from "../tabla/BarraBusqueda";

import React, { useState } from "react"; 

function MainPage(props){
    const [dataForTable, setDataforTable] = useState(props.data);
    return (
        <div>
            <div className="d-flex text-center mx-auto w-100">
                    <BotonCrear path = {props.path}/>
                    <BarraBusqueda
                        data = {props.data}
                        setDataforTable = {setDataforTable}
                        columns = {props.columns}
                    />
            </div>
            <Tabla  
                    data = {dataForTable}
                    path = {props.path}
                    name = {props.name}  
                    columns = {props.columns}
                    columnsAlias = {props.columnsAlias}
                    tools = {props.tools}
                />
        </div>
    );

}

export default MainPage;