export const usuarioReducer = (state = [], action) => {
    switch(action.type) {
        case "agregarUsuario": 
            return [
                ...state, 
                {
                    ...action.payload, 
                    id: new Date().getTime()
                }
            ];
        case "eliminarUsuario":
            return state.filter((user) => user.id !== action.payload );
        case "editarUsuario":
            return state.map((usuario) => {
                if (usuario.id === action.payload.id) {
                    return {
                        ...usuario, 
                        ...action.payload
                    };
                } 
                return usuario;
            });
        case "listarUsuarios" :
            return action.payload;
        default:
            return state;
    }
};
