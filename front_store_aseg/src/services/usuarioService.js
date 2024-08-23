import axios from "axios"

export const getUsuarios = async() => {
    try {
        const respuesta = await axios.get("http://localhost:9192/usuarios");
        return respuesta;
    } catch (error){
        console.error("Aqui fallo", error);
    }
    return null;
}