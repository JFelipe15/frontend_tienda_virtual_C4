import Row from "./Row"

function Body(props){
    //props.data -> arreglo
    //props.data[0]
    //props.tools = {props.tools}

    return(
        <tbody>
            {
                props.data.map(function(value, index){
                    return (
                        <Row 
                            rowData = {value} 
                            columns = {props.columns} 
                            tools = {props.tools}
                            path = {props.path}
                        />   
                        )
                })
            }
        </tbody>
    );
}

export default Body;