import { Navigate, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = useProfile();

  if (profile) {
    return <Navigate to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
