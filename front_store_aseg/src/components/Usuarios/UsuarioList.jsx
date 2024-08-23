import React from "react";
import { Table } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import UsuarioRow from "./UsuarioRow";

function UsuarioList({ usuarios = {}, handleEliminarUsuario, handleEditarUsuario }) {
  return (
    <Table className="table-hover table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th> <FaRegUserCircle size={25}/> Usuario</th>
          <th> <MdOutlineAlternateEmail size={25}/> Correo electronico</th>
          <th>Editar</th>
          <th>Elinimar</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(({id, username, email}) =>( 
            <UsuarioRow key={id} id={id} email={email} username={username} handleEliminarUsuario={handleEliminarUsuario} handleEditarUsuario={handleEditarUsuario}   />
        ))}
      </tbody>
    </Table>
  );
}

export default UsuarioList;
