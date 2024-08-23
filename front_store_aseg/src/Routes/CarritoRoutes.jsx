import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import CarritoView from "../components/CarritoView";
import CatalogoView from "../components/CatalogoView";
import UsuarioMain from "../components/Usuarios/UsuarioMain";

function CarritoRoutes({handleEliminarProducto, handleAgregarProductos, carritoItems}) {
  return (
    <div>
      <Routes>
        <Route path="catalogo" element={ <CatalogoView handler={(producto) => handleAgregarProductos(producto)}/>
          }
        />
        <Route path="carrito"
          element={
            carritoItems.length <= 0 ? (
              <div className="alert alert-warning">No tenemos productos.</div>
            ) : (
              <div className="container">
                <h3>Mi carrito</h3>
                <CarritoView items={carritoItems} handleEliminar={handleEliminarProducto}/>
              </div>
            )
          }
        />
        <Route path="/" element={<Navigate to={"/catalogo"} />} />
        <Route path="usuarios" element={<UsuarioMain/>} />
      </Routes>
    </div>
  );
}

export default CarritoRoutes;