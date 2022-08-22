import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from '../redux/auth/auth-selectors';

const PublicRoute = ({ restricted, component: Component, ...props }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn && restricted ? (
    <Navigate to="/contacts" />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;