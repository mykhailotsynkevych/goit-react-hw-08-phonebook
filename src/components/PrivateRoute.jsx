import { useSelector } from 'react-redux';
import { Navigate }  from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />;
};

export default PrivateRoute;