function Header(props){
    //props.columns = {props.columnsAlias}  
    //props.tools = {props.tools}

    let toolHeader = undefined;
    if (props.tools && props.tools.length > 0) { {/* Si obtengo la propiedad de tools y tengo su longitud y es mayor a cero */}

        toolHeader = <th scope="col"> Tools </th> //Entonces Renderizo en el th Tools
    }

    return(
        <thead>
            <tr>
                {props.columns.map(function (value, index){  //Para cada columna renderiza el valor en value y muestralas en la tabla en los <th><th/>
                    return <th scope="col"> {value} </th>;
                })}
                
                {/*<th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>*/}
                {toolHeader}
            </tr>
        </thead>
    );
}


export default Header;

{/*

Explicación función map()

Recibe un arreglo -> [1,2,3,5]
Lo evalua el numero de veces del total de los elementos en el arreglo
El valor y el indice al que pertenece


[1,2,3,5].map(
    function(value, index){
        return value + index
    }
)

value   index  
  1       0    ->  1
  2       1    ->  3
  3       2    ->  5
  5       3    ->  8 

*/}