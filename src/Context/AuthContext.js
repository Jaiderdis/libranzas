import { createContext, useEffect, useState, useReducer } from "react";
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie'
const AuthContext = createContext({});






export const AuthProvider = ({ children }) => {
    const [cookies, setCookie,removeCookie] = useCookies(['token', 'refreshToken'])
    const [auth, setAuth] = useState(() => cookies.token ? cookies.token : null)
    // const [isAuthenticate, setIsAuthenticate] = useState(() => localStorage.getItem('token') ? localStorage.getItem('token') : null)

    function guardarUsuario(datos) {

        if(datos){
            const token = datos.token;
            const refreshToken = datos.refreshToken;
            let expires = new Date()
            expires.setDate(expires.getDate() + 1); // Ejemplo: la cookie expirará en 7 días
            
          
            setAuth(token)
            setCookie('token', token,{path: '/',expires: expires })
            setCookie('refreshToken', refreshToken,{path: '/', expires: expires})
    
        }
       


    //  console.log(cookies.token)
    //     const co=new Cookies();


    //     expirationDate.setDate(expirationDate.getDate() + 1); // Ejemplo: la cookie expirará en 7 días

    //     co.set('token', token, { expires: expirationDate, httpOnly: true });


    //    const c= co.get('token')
    // console.log('hola')
    // console.log(c)




        // if (token) {
        //     setAuth(JSON.stringify(token))
        //     localStorage.setItem("token", JSON.stringify(token))
        //     localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
        // }

    }

    function outLogin(){

        removeCookie("token");
        removeCookie("refreshToken");
        setAuth(null);
    }


    return (
        <AuthContext.Provider value={
            {outLogin,
                auth,
                setAuth,
                guardarUsuario,
                cookies
            }}>

            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;