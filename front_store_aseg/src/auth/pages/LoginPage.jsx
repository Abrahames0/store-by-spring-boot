import Swal from "sweetalert2";
import { useState } from "react";

const datosInicialesLogin ={
    username:"",
    password:""
}

const LoginPage = ({handlerLogin}) => {
    const [loginForm, setLoginForm] = useState(datosInicialesLogin);
    const {username, password} = loginForm;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setLoginForm({...loginForm, [name]: value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!username || !password){
           Swal.fire({
            icon:"error",
            title: "Todos los campos son obligatorios",
            text: "Por favor, ingrese todos los datos"
           })
            return;
        }
        handlerLogin({username, password})
        setLoginForm(datosInicialesLogin);
    }

  return (
    <div className="modal"  style={{display:"block"}}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Pagina de Login</h5>
      </div>
      <form onSubmit={onSubmit}>
      <div className="modal-body">
        <input type="text" className='form-control my-3' 
        placeholder='Nombre de Usuario'
        name='username'
        value={username}
        onChange={onInputChange}
        />

        <input type="password" className='form-control my-3' 
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={onInputChange}
        />
        </div>
     
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary">Entrar</button>
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default LoginPage
