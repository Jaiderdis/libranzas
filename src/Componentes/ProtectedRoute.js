import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Loading } from '../Componentes/Loading/Loading';
import useAuth from '../hooks/useAuth';
import jwt_decode from 'jwt-decode';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Usuario_URL = '/Usuarios/ConsultarDatosUsuario';
const ProtectedRoute = () => {

  const { auth, cookies, IsLoading,outLogin, setUser,setRol} = useAuth();
  const axiosPrivate = useAxiosPrivate();


  useEffect(() => {
    if (cookies.token) {
      const decoded = jwt_decode(cookies.token)
      setUser(decoded.name)
      setRol(decoded.role)
      const expired = new Date(decoded.exp * 1000)
      expired.setMinutes(expired.getMinutes() + 5)
      const actual = new Date()
      if (expired < actual) {
        outLogin()
      }
    }else{
      outLogin()
    }

  }, [])



  return (

    IsLoading ? <Loading /> :
      !auth ?<Navigate to={'/login'} /> :
        <Outlet />


  )
};

export default ProtectedRoute;