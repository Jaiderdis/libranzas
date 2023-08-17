import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const RequireAuth = ({ allowedRoles}) => {
    const { auth,setAuth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // const token =getToken()

    useEffect(() => {
        const token=localStorage.getItem("token");
        if(token){
            console.log(token)
            setAuth(token)
          
        }
        // if(token){
        //   console.log("si hay")
        // }
        // else{
        //   console.log("no hay")
        // }
     }, [])




  return (


        // token!==null
        // ?( <Outlet />)
        // :<Navigate to="/Login" state={{ from: location }} replace />
        // <Outlet/>
         auth?<Outlet/>
        // state.token!==null
        //    auth ? (location.pathname.toLowerCase()==='/login'&&auth? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />)
            // ?  <Outlet />
            // : auth?.
            //     ? <Navigate to="/Unauthorized" state={{ from: location }} replace />
                : <Navigate to="/Login" state={{ from: location }} replace />

        // <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;