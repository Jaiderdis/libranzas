import {  Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, user, allowedRoles, ...rest }) => {
//   const isAuthorized = user && allowedRoles.some(role => user.roles.includes(role));

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthorized ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };
 const ProtectedRoute = () => {
    // const isAuthorized = user && allowedRoles.some(role => user.roles.includes(role));

    if(!localStorage.getItem("token")){
      
      return  (<Navigate to={'/login'}/>)
     }
     console.log(localStorage.getItem)
     return (<Outlet/>)
   
   };
 



  export default ProtectedRoute