import PayPal from "./PayPal-Logo.jpg"

import logo from "./Logo3Caucanita_sin_fondo.png"

function CarritoIndex(){
    return(
       
        <div className = "p-4" >
                {/* Orden de compra */}
                
            <div id="ordenCompra">

                <section>
                    <div className="col-md-10">
                        <h2 align = "right" id="id_orden">Orden de compra # Estado </h2>
                    </div>

                    <header>
                        <div class="container d-flex">
                            <div class="col-xs-3 col-md-3">
                                <img class="mb-4" src={logo} alt="" width="250" height="200"/>
                            </div>
                            <div class="col-xs-9 col-md-3" align="left">
                                <h4>La Caucanita Patoja</h4>
                                <p id="id_orden">NIT 90025663-1 </p>
                                <p id="fecha">Fecha/Hora :</p>
                                <p id="fecha">Teléfono : 3173787193</p>
                                <p id="dirección">Dirección : Popayán - Cauca</p>
                            </div>
                        </div>
                    </header>    
                </section>

                {/* Cuerpo */}
                <section>
                        <div class="container">
                            <div class="col-xs-12 col-md-12">
                            <h2>Productos en Lista</h2>
                                <div className="p-3" align = "left">
                                    <a class="btn btn-success" href="">Agregar más Productos</a>
                                </div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#id</th>
                                            <th>Producto</th>
                                            <th>Descripción</th>
                                            <th>Detalles</th>
                                            <th>P.Unitario</th>
                                            <th>Cantidad</th>
                                            <th>Sub.Total</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        <tr>
                                            <td> 1{} </td>                 {/*--Id-*/}
                                            <td>Imagen</td>                {/*--Producto-*/}
                                            <td>Huevos Perícos{} </td>    {/*--Descripción--*/}
                                            <td>  {} </td>                 {/*--Detalles--*/}
                                            <td>$ {} </td>                 {/*--Precio Unitario--*/}
                                            <td align="center">
                                                <div class="btn-group-vertical" role="group" aria-label="Vertical button group col-md-1" >
                                                    <button type="button" class="btn btn-dark btn-xs">+</button>
                                                    <button type="button" class="btn btn-dark btn-xs">-</button>
                                                </div>
                                                4
                                                </td> {/*--Cantidad--*/}
                                            <td>$ {} </td> {/*--Precio Total--*/}
                                            <td><button type="button" class="btn btn-primary">Editar</button></td>
                                            <td><button type="button" class="btn btn-danger ">Remover</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </section>

                <footer>
                        <div class="container">
                            <div class="col-xs-5 col-md-5">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Total a pagar </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>$ {}</td> 
                                            </tr>                                          
                                    </tbody>
                                    <div className="p-3">
                                        <a class="btn btn-success" href="">Generar Orden</a> 
                                    </div> 
                                </table>
                                
                                <button type="button">
                                    <img src = {PayPal} alt="" width="150" height="100"/>
                                </button>
                                <table>
                                
                                    <tr>
                                    
                                        <td></td>
                                        
                                        <div className="col-md-4">
                                            <td></td>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                        </div>
                </footer>
            </div>
        </div>
        
    );
}

export default CarritoIndex;