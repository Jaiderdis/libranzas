import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { Loading } from "./Loading/Loading";

const RequireAuth = ({ allowedRoles }) => {
    const { auth, setAuth, rol, isLoading } = useAuth();
    const [isCargandoRol,setIsCargandoRol]=useState(true)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!auth){
            navigate('/login')
        }else if(auth&&rol){
            setIsCargandoRol(false)
        }
    },[rol])


    return (
        isCargandoRol? <Loading /> :
            allowedRoles.includes(rol)
                ? <Outlet />
                : auth
                    ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                    : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;