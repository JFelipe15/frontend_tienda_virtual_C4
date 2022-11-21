import React from 'react';

//Librerias
import {Route,Routes} from "react-router-dom";

//Componentes
import React_View from './React_View';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Productos from './components/productos/Productos';
import CarritoIndex from './components/carrito';
import Contactanos from './components/contacto/Contactanos';
import Categorias_View from './components/categorias/CategoriasView';
import Nosotros from './components/nosotros/Nosotros';
import LoginView from './components/usuarios/Login';
import UsuariosIndex from './components/usuarios';
import CreateUsuario from './components/usuarios/createUsuario';
import ActualizarUsuario from './components/usuarios/actualizarUsuario';
import EliminarUsuario from './components/usuarios/eliminarUsuario';
import ProductosIndex from './components/productos';
import CrearProducto from './components/productos/crearProducto';
import ActualizarProducto from './components/productos/actualizarProducto';
import EliminarProducto from './components/productos/eliminarProducto';



function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path ="/react" element = {<React_View/>} />
        <Route path ="/" element = {<Home/>} />
        <Route path ="/productos" element = {<Productos/>} />
        <Route path ="/categorias" element = {<Categorias_View/>} />
        <Route path ="/nosotros" element = {<Nosotros/>} />
        <Route path ="/carritoCompras" element = {<CarritoIndex/>} />
        <Route path ="/listaUsuarios" element = {<UsuariosIndex/>} />
        <Route path ="/login" element = {<LoginView/>} />

        <Route
                        path="/listaUsuarios/Crear"
                        element={<CreateUsuario />}
        />

        <Route
                        path="/listaUsuarios/Actualizar/:idUsuario"
                        element={<ActualizarUsuario />}
        />

        <Route
                        path="/listaUsuarios/Eliminar/:idUsuario"
                        element={<EliminarUsuario />}
        />


        <Route path ="/listaProductos" element = {<ProductosIndex/>} />

        <Route
                        path="/listaProductos/Crear"
                        element={<CrearProducto/>}
        />

        <Route
                        path="/listaProductos/Actualizar/:idProductos"
                        element={<ActualizarProducto />}
        />

        <Route
                        path="/listaProductos/Eliminar/:idProductos"
                        element={<EliminarProducto />}
        />   


        <Route path ="/contactanos" element = {<Contactanos/>} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
