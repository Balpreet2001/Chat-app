import { Navigate, Outlet } from 'react-router-dom';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  if (!profile) {
    return <Navigate to="/signin" />;
  }

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="loading" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoading) {
    return <Navigate to="/signin/" />;
  }

  return <Outlet {...routeProps}>{children}</Outlet>;
};

export default PrivateRoute;
