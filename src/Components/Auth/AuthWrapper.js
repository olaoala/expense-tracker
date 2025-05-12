import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './Login';
import Register from './Register';
import Dashboard from '../Dashboard/Dashboard';
import Welcome from '../Dashboard/Welcome';

const AuthWrapper = () => {
  const { isLoggedIn, isCalculated } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Welcome /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={isLoggedIn && isCalculated ? <Dashboard /> : <Navigate to="/" />}
      />
      {/* fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthWrapper;
