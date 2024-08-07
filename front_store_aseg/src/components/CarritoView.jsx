import React, { useEffect, useState } from "react";
import { calcularTotal } from "../services/Productoservices";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const CarritoView = ({ items, handleEliminar }) => {
  const [total, setTotal] = useState(0);

  useEffect(
    () => {
      setTotal(calcularTotal(items));
    },
    [items]
  );


const eliminarProducto = (id) => {
  handleEliminar(id);
};

  
const navigate = useNavigate();

const alcatalogo = () =>{
  navigate("/catalogo");
} 

  return (
    <div className="my-4">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.producto.nombre}</td>
              <td>{item.producto.descripcion}</td>
              <td>${item.producto.precio}</td>
              <td>{item.cantidad}</td>
              <td>${item.producto.precio * item.cantidad}</td>
              <td>
                <button className="btn btn-danger" onClick={() => eliminarProducto(item.producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="fw-bold">
              Total
            </td>
            <td colSpan={3} className="fw-bold">
              ${total}
            </td>
          </tr>
        </tfoot>
      </table>
      <Button variant="danger" className="btn btn-primary" onClick={alcatalogo}>
        Volver al catálogo
      </Button>

    </div>
  );
};

export default CarritoView;
