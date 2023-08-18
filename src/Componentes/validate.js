import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    // const isAuthorized = user && allowedRoles.some(role => user.roles.includes(role));

    if(!localStorage.getItem("token")){
     return  <Navigate to={'/login'}/>
    }

    return <Outlet/>
  
  };




  export default ProtectedRoute