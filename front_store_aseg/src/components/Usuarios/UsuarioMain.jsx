import React, { useEffect } from "react";
import UsuarioList from "./UsuarioList";
import UsuarioForm from "./UsuarioForm";
import { useUsuario } from "../../hooks/useUsuario";


function UsuarioMain() {
    
    const {
        usuarios,
        handlerAgregarUsuario,
        handlerEditarUsuario,
        handlerEliminarUsuario,
        usuarioSeleccionado,
        usuarioFormIniciales,
        listandoUsuarios
    } = useUsuario();

    
    useEffect(() => {
        listandoUsuarios();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
      <h2>Usuario</h2>
      <div className='row'>
        <div className='col'>
            {usuarios.length ===0
            ? <div className='alert alert-info'>No hay usuarios</div>
            : <UsuarioList usuarios={usuarios} handlerEliminarUsuario={handlerEliminarUsuario} handlerEditarUsuario={handlerEditarUsuario}/>
        }
            </div>
        <div className='col'>
          <UsuarioForm handlerAgregarUsuario={handlerAgregarUsuario}  usuarioFormIniciales={usuarioFormIniciales} usuarioSeleccionado={usuarioSeleccionado}/>
          </div>
      </div>
    </div>
    )
}

export default UsuarioMain;