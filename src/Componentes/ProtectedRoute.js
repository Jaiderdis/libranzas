import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, allowedRoles, ...rest }) => {
  const isAuthorized = user && allowedRoles.some(role => user.roles.includes(role));

  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};