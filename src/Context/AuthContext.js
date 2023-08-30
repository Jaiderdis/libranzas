import { createContext, useEffect, useState, useReducer } from "react";
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie'
import axios from '../Api/Axios';
import { logout } from "../Services/LoginService";

const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
    const [cookies, setCookie,removeCookie] = useCookies(['token', 'refreshToken'])
    const [auth, setAuth] = useState(() => cookies.token ? cookies.token : null)
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState()
    const [rol, setRol] = useState()

    function saveUser(datos) {
        if(datos){
            const token = datos.token;
            const refreshToken = datos.refreshToken;
            let expires = new Date()
            expires.setDate(expires.getDate() + 1); // Ejemplo: la cookie expirará en 7 días
            setAuth(token)
            setCookie('token', token,{path: '/',expires: expires })
            setCookie('refreshToken', refreshToken,{path: '/', expires: expires})
    
        }

    }

    function decodeJwt(token){
        var decoded = jwt_decode(token);
        return decoded
    }

    async function outLogin(){
     try{
          const response= await logout({ tokenExpirado:cookies.token ,refreshToken:cookies.refreshToken})
          if(response.data.success){
            console.log("Se elimino correctamente")
          }
        }catch(err){
            
            console.log("ya fue eliminado")
        }
       
        removeCookie("token");
        removeCookie("refreshToken");
        setAuth(null);
    }


    return (
        <AuthContext.Provider value={
            {outLogin,
                auth,
                setAuth,
                saveUser,
                cookies,
                isLoading,
                setIsLoading,
                user,
                setUser,
                decodeJwt,
                rol,
                setRol,

            }}>

            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;