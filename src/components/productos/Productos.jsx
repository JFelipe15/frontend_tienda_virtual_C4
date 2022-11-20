import desayunoAmericano from "../../img/Productos/desayunoAmericano.jpg";
import tamalpipian from "../../img/Productos/tamal_pipian.jpg";
import "./Agregar_productos.css"


function Productos(props) {
    
    const AddNumero_contador =  {
        
            display : "flex",
            justify_content : "center",
            align_items : "center",
        
    }

    const button = {
        width: "50px",
        height: "70px",

        border: "none",
        border_radius: "35px",

    }
    
    return (
      <div>
      <h1>Productos</h1>
        <div class="album py-5 bg-light">
          
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> {/* cambiando el md-3 --> row-cols-md-3 Modifico el tamaño de las card*/}
                  <div class="col">
                    
                    <div class="card shadow-sm">
                        <img src={desayunoAmericano} alt="" id="" width="100%" height="200"/>
                        {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

                        <div class="card-body">
                          <p class="card-text">Descripción</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-warning">Agregar</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                            </div>

                            {/* Contador Aumenta y Disminuye*/}
                            <body>
                            <div class ="center">
                                <div class="addNumero_contador">
                                    {/* Aumenta */}
                                    <button 
                                        class="btn btn-sm btn-outline-secondary"
                                        id = "disabledBtn" 
                                        onClick = "addValueFunction()" 
                                        value ="decrease"> + </button>
                                    
                                    {/* Número Aumenta - Disminuye */}
                                    <div class="value_cont">
                                            <h4 id="amount" value="" class="text-muted col-md" >0</h4>
                                    </div>
                                    
                                    {/* Decrementa */}
                                    <button class="btn btn-sm btn-outline-secondary" onClick = "addValueFunction()" > - </button>
                                </div>
                            </div>
                            </body>

                            {/* Precio Producto */}
                            <p class="text-muted">$5000</p>
                        </div>
                        </div>
                    </div>
                    </div>
        
        
        <div class="col">
          <div class="card shadow-sm">
            <img src={tamalpipian} alt="" id="" width="100%" height="200"/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card shadow-sm">
            <img src="" alt="" id=""/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="" alt="" id=""/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="" alt="" id=""/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="" alt="" id=""/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="" alt="" id=""/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>


       <div class="col">
          <div class="card shadow-sm">
            <img src="" alt="" id=""/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card shadow-sm">
            <img src="" alt="" id=""/>
            {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Desayuno" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>*/}

            <div class="card-body">
              <p class="card-text">Descripción</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
                </div>
                <small class="text-muted">$5000</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    );
}

export default Productos;