function Cell(props){
    //props.value
    //props.index

    if(props.index === 0){
        return <th scope = "row">{props.value}</th> //Para colocarle negrita a la primera columna de la tablas
    }

    return (<td>{props.value}</td>);
}

export default Cell;