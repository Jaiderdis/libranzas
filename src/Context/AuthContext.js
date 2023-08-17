import { createContext, useEffect, useState,useReducer } from "react";

const AuthContext = createContext({

});


// const initialState = {
//     token: localStorage.getItem('token') || null,
//   };


//   const sessionReducer = (state, action) => {
//     switch (action.type) {
//       case 'SET_TOKEN':
//         return { ...state, token: action.payload };
//       default:
//         return state;
//     }
//   };

//   const getToken=()=>{
//     return localStorage.getItem('token');
// }


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    // const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);

   
    // const [state, dispatch] = useReducer(sessionReducer, initialState);
    // const [token,obtenerToken] = useReducer(getToken, null);

    function guardarUsuario(token){
        localStorage.setItem("token",JSON.stringify(token))
        // localStorage.setItem("refreshToken",JSON.stringify(datos.infoToken.refreshToken))
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth,guardarUsuario}}>
        {/* // <AuthContext.Provider value={{ auth, setAuth}}> */}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;