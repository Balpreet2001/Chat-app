import { Navigate, Outlet } from "react-router"

const PrivateRoute = ({children ,...routeProps}) => {
     let profile = false;

  return (
    profile ?<Outlet/>: <Navigate to='/login/'></Navigate>
  )
}

export default PrivateRoute