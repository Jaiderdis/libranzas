import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Loading } from '../Componentes/Loading/Loading';
import useAuth from '../hooks/useAuth';
import jwt_decode from 'jwt-decode';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Usuario_URL = '/Usuarios/ConsultarDatosUsuario';
const ProtectedRoute = () => {

  const { auth, cookies, isLoading, setIsLoading, outLogin, setUser,setRol} = useAuth();
  const axiosPrivate = useAxiosPrivate();



  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController();
    const signal = controller.signal;



    const getUser = async () => {
      try {

        const response = await axiosPrivate.get(`/Usuarios/ConsultarDatosUsuario?IdUsuario=${decoded.name}`, { signal });
        if (response?.data?.success) {
          setUser(response.data.result.primerNombre);
          setRol(response.data.result.rol);
        }
        //
      } catch (err) {

        // Handle error, e.g., redirect to login
        // console.error(err);
      }
    };

    if (cookies.token) {
      var decoded = jwt_decode(cookies.token);
      var expired = new Date(decoded.exp * 1000);
      expired.setMinutes(expired.getMinutes() + 5);
      var actual = new Date();
      if (expired < actual) {
        outLogin()
      }


      else {
        getUser();
        setIsLoading(false)
        return () => {

          controller.abort();
        };

      }
    }



  }, [])

  return (
    // auth?.roles?.find(role => allowedRoles?.includes(role))
    // ? <Outlet />
    // : auth?.user
    //     ? <Navigate to="/unauthorized" state={{ from: location }} replace />
    //     : <Navigate to="/login" state={{ from: location }} replace />



    isLoading ? <Loading /> :
      !auth ? <Navigate to={'/login'} /> :
        <Outlet />


  )
};

export default ProtectedRoute;