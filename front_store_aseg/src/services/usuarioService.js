import axios from "axios"

export const getUsuarios = async() => {
    try {
        const respuesta = await axios.get("http://ec2-44-203-251-208.compute-1.amazonaws.com:9192/api/users");
        return respuesta;
    } catch (error){
        console.error("Aqui fallo", error);
    }
    return null;
}