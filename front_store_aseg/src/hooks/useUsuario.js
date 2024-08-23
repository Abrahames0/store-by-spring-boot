
import { getUsuarios } from '../services/usuarioService';
import { useReducer,useState } from 'react'
import Swal from 'sweetalert2';
import { usuarioReducer } from '../reducer/UsuarioReducer';

const usuarioDatosIniciales = [
    {
    // id:1,
    // username: "Mario",
    // password: "12345",
    // email:"am4063228@gmail.com"
    }
];

const usuarioFormIniciales = {  
    id:0,
    username: '',
    password: '',
    email: ''
}
export const useUsuario = () => {

    const [usuarios, dispatch]=useReducer (usuarioReducer, usuarioDatosIniciales);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioFormIniciales);


    const listandoUsuarios = async()=>{
        const resultado = await getUsuarios();
        dispatch({type: "listarUsuarios", payload: resultado.data});
    }
    const handlerAgregarUsuario =(usuario)=>{
        console.log("UsuarioForm" , usuario);
        let type;
        if(usuario.id === 0){
            type = 'agregarUsuario';
        }else{
            type = 'editarUsuario';
        }
        dispatch({type: type, payload: usuario});
        Swal.fire(
            {
                icon:"success",
                title: usuario.id === 0 ? "El usuario se registro":"El usuario se actualizo",
                message: usuario.id === 0 ? "El usuario se guardo correctamente": "El usuario se actualizo"
            }
        )
        
    }
    const handlerEliminarUsuario = (id)=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "cancelao"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({type: "ELIMINAR_USUARIO", payload: id});
              console.log("Usuario eliminado", id);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              
            }
          });
     
    }

    const handlerEditarUsuario = (usuario)=>{
        console.log("Usuario a Editar", usuario);
        setUsuarioSeleccionado({...usuario});
    }

    return {
        usuarios,
        handlerAgregarUsuario,
        handlerEditarUsuario,
        handlerEliminarUsuario,
        usuarioSeleccionado,
        usuarioFormIniciales,
        listandoUsuarios
    }
}