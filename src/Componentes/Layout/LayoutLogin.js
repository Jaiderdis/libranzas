import { Navigate, Outlet } from 'react-router-dom'
import { Loading } from '../Loading/Loading'
import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'

const LayoutLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { auth } = useAuth()
  useEffect(() => {
    // Simulando una comprobación asincrónica de autenticación
    const checkAuthentication = () => {
      if (!auth) {
        // No autenticado, redirigir a /login
        setIsLoading(false)
      } else {
        // Autenticado, permitir acceso
        setIsLoading(false)
      }
    }

    checkAuthentication()
  }, [])

  if (isLoading) {
    // Renderizar un componente de carga mientras se verifica la autenticación
    return <Loading/>
  }

  // // Si no está cargando, decidir si redirigir a /login o permitir el acceso
  if (!auth) {
    return <Outlet/>
  }

  return <Navigate to={'/'} />
}

export default LayoutLogin
