import React from "react";

import CarruselHistoria from "./CarruselHistoria";
import CarruselGastronomia from "./CarruselGastronomia";

function Nosotros(props) {
    return (
        <div>   
               {/*START THE FEATURETTES*/}
          <div class="row featurette p-4">
            <h2 class = " featurette-heading fw-normal lh-1 p-4 col-md ">¿ Quienes Sómos ?</h2>
                <p class = " lead col-md-12" align = "left"> 
                   Somos una empresa dedicada a la comercialización de productos alimenticios 
                   preparados, ubicada en la ciudad de Popayán, que cuenta con poco tiempo en el
                   mercado gastronomico, pero que promete la utilización de productos de buena 
                   calidad, del mismo modo la buena preparción de los mismos con la finalidad de 
                   convetirnos en la empresa número 1 en el sector gastronómico en el departamento 
                   del Cauca en implementar estrategias que le permitan al consumidor encontrar 
                   facilidad para adquirir uno o varios alimentos desde la comodiad de su casa, 
                   evitando de esta manera que tenga que prepararlo el mismo o que tenga que salir a comprarlo.  
                </p>
          </div>

            {/* Historia y Paisajes */}
            <hr class="featurette-divider"/> 

                <div class="row featurette p-4">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Historia y Reconocimiento. <span class="text-muted">Popayán.</span></h2>
                        <p class="lead col-md-12" align = "left">
                            Popayán es una cidudad ubicada en el departamento del Cauca, fue fundada en el año x por x quien ....., cuenta la historia,
                            qué hace años a mediados de los años existieron unos bichos conocidos como niguas..... 
                            esta ciudad es conocida en Colombia como la ciudad blanca debido sus paredes blancas y a su arquitectura colonial elementos que aún
                            se conservan en el centro de la ciudad como parte de la cultura patoja, además es reconocida por su gastronomia, de la 
                            cual hay productos famosos como el champús, las empanadas y tamales de pipián, la carantanta, el salpicón payanés.
                            Cada 2 años se celebra la feria gastronómica, donde una serie de productos de la región y de otras regiones son expuestos para 
                            deleitar el paladar de los patojos y payaneses, además el evento se acompaña con eventos artísticos y culturales donde al ritmo de 
                            chirimía, ritos afrolatinos, rock, salsa, entre otros, algunas agrupaciones musicales exponen su talento y ponen a bailar a los difetentes 
                            espectadores. 
                        </p>
                    </div>
                    
                    <div class="col-md-5">
                        <CarruselHistoria/>
                    </div>
                </div>

            {/* Gastronomía */}
            <hr class="featurette-divider"/>

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1"> Gastronomía. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead col-md-12" align = "left">
                            Es reconocida por su gastronomia, de la cual hay productos famosos como el champús, las empanadas y tamales de pipián, el ají de maní, 
                            la carantanta, el salpicón payanés.
                        </p>
                    </div>
                    
                    <div class="col-md-5 order-md-1">
                        <CarruselGastronomia/>
                    </div>
                </div>

            {/* Lugares Típicos Gastronómicos */}
            <hr class="featurette-divider"/>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1"> Lugares típicos gastronómicos <span class="text-muted">Checkmate.</span></h2>
                        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>

                    <hr class="featurette-divider"/>

                    { /*END THE FEATURETTES */}
        </div>
    );
}

export default Nosotros;