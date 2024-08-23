import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductoView({ id, nombre, descripcion, precio, handler }) {

  const navigate = useNavigate();
  
  const agregarProducto = (producto) => {
    handler(producto);
    navigate("/carrito");
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">Precio ${precio}</p>
          <Button className="btn btn-primary"
            onClick={() => agregarProducto({ id, nombre, descripcion, precio })}>
            Agregar al carritos
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductoView;
