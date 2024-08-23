import React from "react";
import { Button } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function UsuarioRow({ id, username, email, handleEliminarUsuario, handleEditarUsuario }) {
  return (
    <tr key={id}>
      <td> {id}</td>
      <td> {username}</td>
      <td> {email}</td>
      <td className="text-center">
        <Button variant="primary" onClick={() => handleEditarUsuario({id, username, email})}>
          <CiEdit size={25} />
        </Button> 
      </td>
      <td className="text-center">
        <Button variant="danger" onClick={()=> handleEliminarUsuario(id)}>
          <MdDeleteForever size={20} />
        </Button>
      </td>
    </tr>
  );
}

export default UsuarioRow;
