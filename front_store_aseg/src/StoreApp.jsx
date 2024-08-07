import React, { useState } from "react";
import Nadvar from "./components/Nadvar";
import CarritoRoutes from "./Routes/CarritoRoutes";

const datosIniciales = [];

function StoreApp() {
  const [carritoItems, setCarritoItems] = useState(datosIniciales);

  const handleAgregarProductos = (producto) => {
    const existeItem = carritoItems.find(
      (item) => item.producto.id === producto.id
    );

    if (existeItem) {
      setCarritoItems(
        carritoItems.map((item) => {
          if (item.producto.id === producto.id) {
            return {
              ...item,
              cantidad: item.cantidad + 1,
            };
          }
          return item;
        })
      );
    } else {
      setCarritoItems([
        ...carritoItems,
        {
          producto: producto,
          cantidad: 1,
        },
      ]);
    }
  };

  const handleEliminarProducto = (id) => {
    setCarritoItems(carritoItems.filter((item) => item.producto.id !== id));
  };


  return (
    <div>
        <Nadvar/>
      <div className="container">
        <h3>Mi tiendita</h3>
        <CarritoRoutes handleAgregarProductos={handleAgregarProductos} handleEliminarProducto={handleEliminarProducto} carritoItems={carritoItems} />
      </div>
    </div>
  );
}

export default StoreApp;