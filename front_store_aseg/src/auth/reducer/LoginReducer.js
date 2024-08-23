export const loginReducer = (state =[], action) => {
    switch(action.type){
        case "login":
            return {
                user: action.payload,
                isAuth: true,
            }
            case "logout":
                return{
                    isAuth: false
                }
            default:
                return state;
    }
}