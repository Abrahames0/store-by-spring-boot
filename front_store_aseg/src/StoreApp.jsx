import React, { useReducer } from "react";
import LoginPage from "./auth/pages/LoginPage";
import UsuarioPage from "./pages/UsuarioPage";
import Swal from "sweetalert2";
import { loginReducer } from "./auth/reducer/LoginReducer";

const datosLoginForm = {
  isAuth: false,
  user:null
}

function StoreApp() {

 const [login, dispatch] = useReducer( loginReducer, datosLoginForm );

 const handlerLogin = (({username, password})=>{
  if(username === "salvador"  && password === "12345"){
    const user = {username: "admin"};
    dispatch({
      type: "login",
      payload: user
    });
  }else{
    Swal.file({
      icon: "error",
      title: "Error de autenticacion",
      text: "El usuario y/o contraseña son incorrectas"
    })
  }
 })

  return (
    <div>
      {login.isAuth ? <UsuarioPage/> : <LoginPage handlerLogin={handlerLogin}/>}
    </div>
  );
}

export default StoreApp;