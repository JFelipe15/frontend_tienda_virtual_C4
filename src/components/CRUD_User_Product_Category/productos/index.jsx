import { productosData } from "../../../js/productosData";
import MainPage from "../../tabla/MainPage";

function ProductosIndex(props) {

    //        "id": 1,
    //        "title": "iPhone 9",
    //        "description": "An apple mobile which is nothing like apple",
    //        "price": 549,
    //        "discountPercentage": 12.96,
    //        "rating": 4.69,
    //        "stock": 94,
    //        "brand": "Apple",
    //        "category": "smartphones",
    //        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    //        "images": [
    //            "https://i.dummyjson.com/data/products/1/1.jpg",
    //            "https://i.dummyjson.com/data/products/1/2.jpg",
    //            "https://i.dummyjson.com/data/products/1/3.jpg",
    //            "https://i.dummyjson.com/data/products/1/4.jpg",
    //            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    //        ]


    let datosTabla = productosData("url", {}, "get", {})

    return (
        <div>
            <h3 className="p-3">Lista Productos</h3>
            <p>Bienvenidos a la pagina de administracion de Productos</p>

            <MainPage
                data={datosTabla}
                path={"/listaProductos"}
                name={"Tabla de Productos"}
                columns={["id", "title", "description", "price", "stock", "category"]}
                columnsAlias=
                {
                    [
                        "ID",
                        "Título",
                        "Descripción",
                        "Precio",
                        "Stock",
                        "Categoría"
                    ]
                }
                tools={["Crear", "Actualizar", "Eliminar", "AgregarTienda"]}

            />


        </div>
    );
}

export default ProductosIndex;