import img  from "../../img/NosotrosImagenes/Historia y Aterdeceres/AtardecerPopayan.jpg"
import img2 from "../../img/NosotrosImagenes/Historia y Aterdeceres/AtardecerTorreRelojPopayan.jpg"
import img3 from "../../img/NosotrosImagenes/Historia y Aterdeceres/CargerosSemanaSantaPopayan.jpg"
import img4 from "../../img/NosotrosImagenes/Historia y Aterdeceres/ElMorroPopayan.jpg"
import img5 from "../../img/NosotrosImagenes/Historia y Aterdeceres/ElMorroPopayan2.jpg"
import img6 from "../../img/NosotrosImagenes/Historia y Aterdeceres/Parque Caldas Popayan.jpg"
import img7 from "../../img/NosotrosImagenes/Historia y Aterdeceres/Popayan-Atardecer.jpg"
import img8 from "../../img/NosotrosImagenes/Historia y Aterdeceres/Popayan-ParqueCaldas.jpeg"
import img9 from "../../img/NosotrosImagenes/Historia y Aterdeceres/Pueblito Patojo.jpg"
import img10 from "../../img/NosotrosImagenes/Historia y Aterdeceres/Parque Caldas Popayan.jpg"
import img11 from "../../img/NosotrosImagenes/Historia y Aterdeceres/Pueblito Patojo2.jpg"

function CarruselHistoria(){
    return(        
    <div class="container mt-3">

          {/*The carousel*/}
          <div id="myCarousel2" class="carousel slide" data-ride="carousel" data-interval="500" data-pause="haover">
        
          {/* Indicators */}
          <ul class="carousel-indicators">
            <li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel2" data-slide-to="1"></li>
            <li data-target="#myCarousel2" data-slide-to="2"></li>
            
          </ul>
          
          {/* The slideshow */}
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval ="50000">
              <img src={img} alt="Desayuno Americano" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="40000">
              <img src={img2} alt="Desayno con Salchicha" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
              <img src={img3} alt="Desayuno Saludable" width="1100" height="500"/>
            </div>
            

            {/*
            <div class="carousel-item active" data-bs-interval ="5000">
              <img src={img4} alt="Desayuno Americano" width="1100" height="500"/>
            </div>
           
            <div class="carousel-item" data-bs-interval="4000">
              <img src={img5} alt="Desayno con Salchicha" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={img6} alt="Desayuno Saludable" width="1100" height="500"/>
            </div>
            <div class="carousel-item active" data-bs-interval ="2000">
              <img src={img7} alt="Desayuno Americano" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="1000">
              <img src={img8} alt="Desayno con Salchicha" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="500">
              <img src={img9} alt="Desayuno Saludable" width="1100" height="500"/>
            </div>
            <div class="carousel-item active" data-bs-interval ="250">
              <img src={img10} alt="Desayuno Americano" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="100">
              <img src={img11} alt="Desayno con Salchicha" width="1100" height="500"/>
            </div>*/}
          </div>
          
          {/*Left and right controls*/}
          <a class="carousel-control-prev" href="#myCarousel2" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel2" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        
        </div>
        
        
    );
}

export default CarruselHistoria;