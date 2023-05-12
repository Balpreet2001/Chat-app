import { Navigate, Route } from 'react-router';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (!profile) {
    return <Navigate to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
