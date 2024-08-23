import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function UsuarioForm({handleAgregarUsuario, usuarioFormsIniciales, usuarioSeleccionado}) {

    const [usuarioForm, setUsuarioForm] = useState(usuarioFormsIniciales); 
    const {id, username, password, email } = usuarioForm;

    useEffect(() => {
        setUsuarioForm({
            ...usuarioSeleccionado, password : ''
        })
    }, [usuarioSeleccionado]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUsuarioForm({ ...usuarioForm, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();  
        if (!username || !password || !email) {
            alert("Completa el formulario");
            return;
        }
        handleAgregarUsuario(usuarioForm);
        setUsuarioForm(usuarioFormsIniciales);  
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" className="form-control my-3 w-75" placeholder="Nombre del Usuario" name="username" onChange={onInputChange} value={username} />
            <input type="password"  className="form-control my-3 w-75"  placeholder="Contraseña" name="password"  onChange={onInputChange} value={password} />
            <input type="email" className="form-control my-3 w-75" placeholder="Correo Electronico" name="email" onChange={onInputChange} value={email} />
            <input type="hidden" name="id" value={id}/>
            <Button type="submit" variant="primary"> {id > 0 ? "Editar" : "Guardar"}</Button>
        </form>
    );
}

export default UsuarioForm;
