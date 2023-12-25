import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import operations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from '../redux/auth/auth-selectors';
import { Suspense } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      {!isFetchingCurrentUser && (
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route
              path="login"
              element={<PublicRoute component={HomePage} restricted />}
            />
            <Route
              path="register"
              element={<PublicRoute component={RegisterPage} restricted />}
            />
            <Route
              path="contacts"
              element={<PrivateRoute component={ContactsPage} />}
            />
            <Route
              path="*"
              element={<PublicRoute component={HomePage} restricted />}
            />
          </Routes>
        </Suspense>
      )}
    </div>
  );
};

export default App;
