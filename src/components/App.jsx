import React from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import HomePage from "../pages/HomePage/HomePage";

import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ConatctsPage/ContactsPage';

import operations from '../redux/auth/auth-operations';

const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
