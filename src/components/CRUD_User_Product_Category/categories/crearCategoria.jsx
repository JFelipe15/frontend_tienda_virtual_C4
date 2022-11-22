function CrearCategoria(props) {
    return (


                        //"ID", 
                        //"Categoría",
                        //"Producto" ,
                        //"Descripcion",
                        //"Precio",
                        //"Stock",

        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Crear Categoría</h3>
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="firstName" class="form-label">
                            Nombre Categoría
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Ej: Desayunos Tradicionales"
                            defaultValue=""
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="title" class="form-label">
                           Nombre Producto
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="text"
                                class="form-control"
                                id="title"
                                placeholder="Ej: Huevos Fritos"
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
                        <input
                            type="text"
                            class="form-control"
                            id="description"
                            placeholder="Ej: Huevos Fritos con Arroz y Café"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="price" class="form-label">
                            Precio
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="price"
                            placeholder="$ 3.000"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="stock" class="form-label">
                            Stock
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="stock"
                            placeholder="48"
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

export default CrearCategoria;