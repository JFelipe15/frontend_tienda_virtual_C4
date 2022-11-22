import { useParams } from "react-router-dom";
import { getCategory } from "../../../js/getDataCategorias";
import { estadoPrincipal, setEstadoPrincipal } from "../../../js/global";

function EliminarCategoria(props) {

    // {category.id}
    // {category.title}
    // {category.description}
    // {category.price}
    // {category.stock}
    // {category.category}

    let { idCategoria } = useParams();
    let category = getCategory( idCategoria);
    setEstadoPrincipal({
        name: "N/A - " + estadoPrincipal.name,
        auhtenticated: false,
    });
    return (
        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Eliminar Categoría {estadoPrincipal.name}</h3>
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
                            defaultValue={category.id}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="category" class="form-label">
                            Categoría
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="category"
                            defaultValue={category.category}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="title" class="form-label">
                            Producto
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="title"
                            placeholder="Nombres"
                            defaultValue={category.title}
                            required={true}
                            minLength={4}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="description" class="form-label">
                            Descripción
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="description"
                            placeholder="Apellidos"
                            defaultValue={category.description}
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
                                type="text"
                                class="form-control"
                                id="price"
                                placeholder=""
                                defaultValue={category.price}
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
                            type="number"
                            class="form-control"
                            id="stock"
                            placeholder="ejemplo@dominio.com"
                            defaultValue={category.stock}
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

export default EliminarCategoria;