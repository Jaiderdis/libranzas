import { createContext, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useCookies } from 'react-cookie'
import { logout } from '../Services/LoginService'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'refreshToken'])
  const [auth, setAuth] = useState(() => cookies.token ? cookies.token : null)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState()
  const [rol, setRol] = useState()
  const [modeDark, setModeDark] = useState(() => localStorage.getItem('theme') === 'dark')

  function saveUser (datos) {
    if (datos) {
      const token = datos.token
      const refreshToken = datos.refreshToken
      const expires = new Date()
      expires.setDate(expires.getDate() + 1) // Ejemplo: la cookie expirará en 7 días
      setAuth(token)
      setCookie('token', token, { path: '/', expires })
      setCookie('refreshToken', refreshToken, { path: '/', expires })
    }
  }

  function decodeJwt (token) {
    const decoded = jwt_decode(token)
    return decoded
  }

  async function outLogin () {
    try {
      const response = await logout({ tokenExpirado: cookies.token, refreshToken: cookies.refreshToken })
      if (response.data.success) {
        console.log('Se elimino correctamente')
      }
    } catch (err) {
      console.log('ya fue eliminado')
    }

    removeCookie('token')
    removeCookie('refreshToken')
    setAuth(null)
  }

  const toggleModeDark = () => {
    localStorage.setItem('theme', !modeDark ? 'dark' : 'light')
    setModeDark(!modeDark)
  }

  return (
        <AuthContext.Provider value={
            {
              outLogin,
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
              toggleModeDark,
              modeDark

            }}>

            {children}
        </AuthContext.Provider>
  )
}

export default AuthContext
