import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../firebase/useAuth';

function ProtectedRoute({ children, allowedRoles }) {
    const { user, role, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/403" />;
    }

    return children;
}

export default ProtectedRoute;
