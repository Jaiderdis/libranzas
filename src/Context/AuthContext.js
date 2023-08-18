import { createContext, useEffect, useState, useReducer } from "react";
import jwt_decode from "jwt-decode";
const AuthContext = createContext({

});


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState({
        nombre: '',
        Rol: ''
    });
    // function guardarUsuario(token){
    //     localStorage.setItem("token",JSON.stringify(token))
    //     // localStorage.setItem("refreshToken",JSON.stringify(datos.infoToken.refreshToken))
    // }

    function guardarUsuario(datos) {
        console.log(datos)
        const token = datos.infoToken.token;
        const refreshToken = datos.infoToken.refreshToken;


        if (token !== null) {
    
            const decoded = jwt_decode(token);
            console.log(decoded)
            setAuth(token)
            localStorage.setItem("token", JSON.stringify(token))
            localStorage.setItem("exp", JSON.stringify())
            localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
        }


    }




    return (
        <AuthContext.Provider value={{ auth, setAuth, guardarUsuario }}>
            {/* // <AuthContext.Provider value={{ auth, setAuth}}> */}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;