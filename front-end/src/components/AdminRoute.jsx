import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { userInfo } = useSelector(state => state.auth)
  return (
    // Outlet just produces whatever the page is if there is a user logged in.
    userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" replace />
  );
};

export default AdminRoute;