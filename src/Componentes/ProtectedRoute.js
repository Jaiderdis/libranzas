import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Loading } from '../Componentes/Loading/Loading';
import useAuth from '../hooks/useAuth';


const ProtectedRoute = () => {

  const {auth} = useAuth();

  useEffect(()=>{
    console.log(`Protected${auth}`)
  },[])

  return (
      !auth ? <Navigate to={'/login'} />:
        <Outlet />


  )
};

export default ProtectedRoute;