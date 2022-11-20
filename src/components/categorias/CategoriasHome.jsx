//Librerias
import { Link } from "react-router-dom"
import React from "react";


//Imagenes
import tamalPipian from "../../img/Productos/tamal_pipian.jpg"
import kiwi from "../../img/Productos/kiwiSaludable.jpg"
import huevosSalchicha from "../../img/Productos/desayunoSalchicha.jpg"

//CSS
import "../../css/Categorias_Img_Circular.css"



function Categorias_Home(props){
        
        return (
        <div class="container marketing p-4" >
                    <h3 >Categorias</h3>
              <div class="row p-4 col-mb-3" >

                {/* --- Desayunos Tradicionales --- */}
                <div class="col-lg-4">
                     <a>
                        <Link to = {"/categorias"} className="btn" React > 
                            <img src={tamalPipian} 
                                alt="" 
                                className="imgRedonda"
                                width=""
                                heigth="500"
                              />
                             <h2 class="fw-normal">Desayunos Tradicionales</h2>
                        </Link>
                      </a>
                       
                          <p>Encuentra aquí tu desayuno elaborado con los más ricos y deliciosos productos tradiconales de la región</p>
                </div>
                      
                      
                  {/* --- Desayunos Saludables --- */}
                <div class="col-lg-4 ">
                      <a>
                        <Link to = {"/categorias"} className="btn" React > 
                            <img src={kiwi} 
                                alt="" 
                                className="imgRedonda"/>
                            <h2 class="fw-normal">Desayunos Saludables</h2>
                        </Link>
                      </a>
                        <p>Aquí encontrarás tu desayuno saludable para que mantengas una dieta rica en proteinas y vitaminas</p>
                  </div>
                 

                    {/* --- Desayunos Tradicionales --- */}
                    <div class="col-lg-4">
                      <a>
                          <Link to = {"/categorias"} className="btn" React > 
                              <img src={huevosSalchicha} 
                                  alt="" 
                                  className="imgRedonda"/>
                              <h2 class="fw-normal">Desayunos Caseros</h2>
                          </Link>
                        </a>
                          
                            <p>Encuentra aquí tu desayuno elaborado con los más ricos y deliciosos productos tradiconales de la región</p>
                      </div>
              </div>
        </div> 
               
          );

};

export default Categorias_Home;
