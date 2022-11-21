
function CrearProducto(props) {


    //columns = {["id", 
    //           "title",
    //           "description", 
    //           "price", 
    //           "stock", 
    //           "category"]}
    //"ID", 
    //"Título" , 
    //"Descripción",
    //"Precio", 
    //"Stock", 
    //"Categoría"
    return (
        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Crear Producto</h3>
            <form>
                <div class="row g-3">

                    <div class="col-12">
                        <label for="title" class="form-label">
                                Título
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="text"
                                class="form-control"
                                id="title"
                                placeholder="Ej: Jugo de Mora"
                                defaultValue=""
                                required={true}
                                minLength={4}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="description" class="form-label">
                                Descripción
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="text"
                                class="form-control"
                                id="description"
                                placeholder="Ej: Bebida Natural"
                                defaultValue=""
                                required={true}
                                minLength={5}
                            />
                        </div>
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
                                placeholder="Ej: $ 3.000"
                                defaultValue=""
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
                            type="int"
                            class="form-control"
                            id="stock"
                            placeholder="Ej: 40"
                            defaultValue=""
                            required={true}
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
                            placeholder="Ej: Bebidas"
                            defaultValue=""
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

export default CrearProducto;