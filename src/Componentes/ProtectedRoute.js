import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Loading } from '../Componentes/Loading/Loading';

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
// const ProtectedRoute = () => {
  // const isAuthorized = user && allowedRoles.some(role => user.roles.includes(role));


//   if (!localStorage.getItem("token")) {
//     return ( <Navigate to={'/login'} replace />)
//   }
//   return ( <Outlet />)

// };




// export default ProtectedRoute


const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando una comprobación asincrónica de autenticación
    const checkAuthentication = () => {
      if (!localStorage.getItem('token')) {
        // No autenticado, redirigir a /login
        setIsLoading(false);
      } else {
        // Autenticado, permitir acceso
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    // Renderizar un componente de carga mientras se verifica la autenticación
    return <Loading/>;
  }

  // Si no está cargando, decidir si redirigir a /login o permitir el acceso
  if (!localStorage.getItem('token')) {
    return <Navigate to={'/login'} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;