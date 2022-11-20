import { useState } from "react";

function BarraBusqueda(props){
    
    const [BusquedaTexto, setBusquedaTexto] = useState("");
    
        let onChangeBusquedaTextoField = function (e){
    
        let BusquedaTexto2 = e.target.value;
        setBusquedaTexto(BusquedaTexto2);

        let results = Buscar(props.data, props.columns, BusquedaTexto2);
        props.setDataforTable(results);
    }

    return (
        <div className="d-flex text-center me-auto">
            <input 
                type="text"
                className="form-control ms-3" 
                value = {BusquedaTexto}
                onChange = {onChangeBusquedaTextoField}
                />

            {/*<input 
                type="button" 
                value={"Buscar"} 
                className="btn btn-success ms-3" />
            */}
        </div>
    )
}

        function Buscar(data, columns, search) {
            let results = [];
            let included = false;
            data.forEach(function (value, index) {
                included = false;
                columns.forEach(function (column, indexColum) {
                    if (
                        value[column]
                            .toString()
                            .toLowerCase()
                            .indexOf(search.toString().toLowerCase()) >= 0 &&
                        !included
                    ) {
                        results.push(value);
                        included = true;
                    }
                });
            });
    return results
}

export default BarraBusqueda;