import { useParams } from "react-router-dom";
import { getProducto } from "../../../js/productosData";
import { estadoPrincipal, setEstadoPrincipal } from "../../../js/global";

function EliminarProducto(props) {

    let { idProducto } = useParams();
    let producto = getProducto(idProducto);
    setEstadoPrincipal({
        name: "N/A - " + estadoPrincipal.name,
        auhtenticated: false,
    });

    return (
        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Eliminar Producto {estadoPrincipal.name}</h3>
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="identifier" class="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="identifier"
                            defaultValue={producto.id}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="title" class="form-label">
                            Titulo
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="title"
                            placeholder=""
                            defaultValue={producto.title}
                            required={true}
                            minLength={4}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="description" class="form-label">
                            Descripcion
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="description"
                            placeholder=""
                            defaultValue={producto.description}
                            required={true}
                            minLength={4}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="price" class="form-label">
                            Precio
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="float"
                                class="form-control"
                                id="price"
                                placeholder=""
                                defaultValue={producto.price}
                                required={true}
                                minLength={4}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="stock" class="form-label">
                            Stock
                        </label>
                        <input
                            type="int"
                            class="form-control"
                            id="stock"
                            defaultValue={producto.stock}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="category" class="form-label">
                            Categoria
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="category"
                            placeholder="Bebidas"
                            defaultValue={producto.category}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-outline-danger btn-lg"
                        type="submit"
                        onClick={onClickSubmit}
                    >
                        Eliminar
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(e) {
    e.preventDefault();
    console.log(e);
}

export default EliminarProducto;