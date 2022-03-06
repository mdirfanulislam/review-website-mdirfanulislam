import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from './../../../Hooks/UseAuth/UseAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = UseAuth();
    let location = useLocation();
    if (isLoading) { return <Spinner animation="border" variant="primary" /> }
    if(user.email){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;