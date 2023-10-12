import React, { useContext } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Development from 'pages/development';
import ForgotPassword from 'pages/forgot-password';
import SignUp from 'pages/signup';
import Login from 'pages/login';
import { AuthContext } from 'context/authContext';
import Pages from './pages/index';

function PublicRoute({ isLoggedIn, redirectTo }) {
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />;
}

function PrivateRoute({ isLoggedIn, redirectTo }) {
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}

function Router() {
  const { isLoggedIn, allowedPages } = useContext(AuthContext);
  console.log({ allowedPages });
  return (
    <Routes>
      <Route path="/brand/:view" element={<PrivateRoute redirectTo="/" isLoggedIn={isLoggedIn} />}>
        <Route path="/brand/:view" element={<Pages />} />
        <Route path="/brand/:view/:child" element={<Pages />} />
      </Route>
      <Route
        path="/sign-up"
        element={
          <PublicRoute
            isLoggedIn={isLoggedIn}
            redirectTo={allowedPages.length > 0 ? `/brand/${allowedPages[0]}` : '/brand/dashboard'}
          />
        }>
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/development" element={<Development />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="*"
        element={
          <PublicRoute
            isLoggedIn={isLoggedIn}
            redirectTo={allowedPages.length > 0 ? `/brand/${allowedPages[0]}` : '/brand/dashboard'}
          />
        }>
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default Router;
