import React from 'react';

//Libraries
import {Route,Routes} from "react-router-dom";

//------------------------------------------------------------ Components ------------------------------------------------------------

//Navbar Components

import React_View from './React_View';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Productos from './components/Products_View/Productos';
import CarritoIndex from './components/carrito';
import Contactanos from './components/contacto/Contactanos';
import Categorias_View from './components/categorias/CategoriasView';
import Nosotros from './components/nosotros/Nosotros';
import LoginView from './components/Users_View/Login';

//CRUD Usuarios
import UsuariosIndex from './components/CRUD_User_Product_Category/usuarios/usuariosIndex';
import CreateUsuario from './components/CRUD_User_Product_Category/usuarios/createUsuario';
import ActualizarUsuario from './components/CRUD_User_Product_Category/usuarios/actualizarUsuario';
import EliminarUsuario from './components/CRUD_User_Product_Category/usuarios/eliminarUsuario';

//CRUD Productos
import ProductosIndex from './components/CRUD_User_Product_Category/productos';
import CrearProducto from './components/CRUD_User_Product_Category/productos/crearProducto';
import ActualizarProducto from './components/CRUD_User_Product_Category/productos/actualizarProducto';
import EliminarProducto from './components/CRUD_User_Product_Category/productos/eliminarProducto';

//CRUD Categorias
import CategoriasIndex from './components/CRUD_User_Product_Category/categories/categoriasIndex';
import CrearCategoria from './components/CRUD_User_Product_Category/categories/crearCategoria';
import ActualizarCategoria from './components/CRUD_User_Product_Category/categories/actualizarCategoria';
import EliminarCategoria from './components/CRUD_User_Product_Category/categories/eliminarCategoria';





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
        <Route path ="/login" element = {<LoginView/>} />

        {/*------------------------------  Users Routes ------------------------------*/}
        <Route path ="/listaUsuarios" element = {<UsuariosIndex/>} />
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

        {/*------------------------------  Products Routes ------------------------------*/}
        <Route path ="/listaProductos" element = {<ProductosIndex/>} />

        <Route
                        path="/listaProductos/Crear"
                        element={<CrearProducto/>}
        />

        <Route
                        path="/listaProductos/Actualizar/:idProducto"
                        element={<ActualizarProducto />}
        />

        <Route
                        path="/listaProductos/Eliminar/:idProducto"
                        element={<EliminarProducto />}
        />   

        {/*------------------------------  Categories Routes ------------------------------*/}
        <Route path ="/listaCategorias" element = {<CategoriasIndex/>} />
        <Route
                        path="/listaCategorias/Crear"
                        element={<CrearCategoria />}
        />

        <Route
                        path="/listaCategorias/Actualizar/:idCategoria"
                        element={<ActualizarCategoria />}
        />

        <Route
                        path="/listaCategorias/Eliminar/:idCategoria"
                        element={<EliminarCategoria />}
        />



        <Route path ="/contactanos" element = {<Contactanos/>} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
