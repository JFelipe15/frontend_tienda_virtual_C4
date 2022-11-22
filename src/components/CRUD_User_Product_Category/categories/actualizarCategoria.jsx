import { useParams } from "react-router-dom";
import { getCategory } from "../../../js/getDataCategorias";

function ActualizarCategoria(props) {

    let { idCategoria} = useParams();
    let category = getCategory(idCategoria);


    // {category.id}
    // {category.title}
    // {category.description}
    // {category.price}
    // {category.stock}
    // {category.category}
    
    return (
        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Actualizar Categoría</h3>
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
                            placeholder=""
                            defaultValue={category.title}
                            required={true}
                            minLength={4}
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
                            placeholder=""
                            defaultValue={category.description}
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="price" class="form-label">
                            Precio
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="number"
                                class="form-control"
                                id="price"
                                placeholder=""
                                defaultValue={category.price}
                                required={true}
                                minLength={4}
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
                            placeholder=""
                            defaultValue={category.stock}
                            required={true}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-primary btn-lg"
                        type="submit"
                        onClick={onClickSubmit}
                    >
                        Continue to checkout
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(e) {
    console.log(e);
}

export default ActualizarCategoria;