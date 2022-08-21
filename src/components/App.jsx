import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import HomePage from "../pages/HomePage/HomePage";

import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ConatctsPage/ContactsPage';

const App = () => {

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
