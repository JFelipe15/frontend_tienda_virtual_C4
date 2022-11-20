
import Desayuno_Familiar from "../../img/HomeImagenes/Desayuno-familia.jpg"
import desayunoAmericano from "./desayunoAmericano.jpg";
import desayunoSalchicha from "./desayunoSalchicha.jpg";
import kiwiSaludable from "./kiwiSaludable.jpg";


//Components
import Categorias_Home from "../categorias/CategoriasHome";


function Home(props){
    return(
      <div>
        <div>
          <img src={Desayuno_Familiar} class="d-block w-100" alt="kiwi Saludable" width="1800" height="600" />
          <button>Bienvenidos a la Caucanita Patoja</button>
        </div>

          <div className="container p-4 carruselHome">     
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
              </div>


              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={desayunoAmericano} class="d-block w-100" alt="kiwi Saludable" width="1100" height="500"/>
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>Huevos Fritos con Tocino.</h1>
                      <p>Some representative placeholder content for the first slide of the carousel.</p>
                      <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                  <img src={desayunoSalchicha} class="d-block w-100" alt="kiwi Saludable" width="1100" height="500"/>
                  <div class="container">
                    <div class="carousel-caption">
                      <h1>Huevos con Salchicha.</h1>
                      <p>Some representative placeholder content for the second slide of the carousel.</p>
                      <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                  <img src={kiwiSaludable} class="d-block w-100" alt="kiwi Saludable" width="1100" height="500"/>
                  <div class="container">
                    <div class="carousel-caption text-end">
                      <h1>Kiwi con Cereal.</h1>
                      <p>Some representative placeholder content for the third slide of this carousel.</p>
                      <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                  </div>
                </div>
              </div>

            {/* BOTON IMAGEN ANTERIOR */}
              <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>

            {/* BOTON IMAGEN SIGUIENTE */}
              <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <Categorias_Home/>

          </div>
      </div>
         
    );
}

export default Home;