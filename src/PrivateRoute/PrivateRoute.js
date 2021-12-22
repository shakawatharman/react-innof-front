import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const {user,loading} = useAuth();
    
    if(loading){return <CircularProgress />}

    return (
        user.email ? 
        children : 
            <Navigate to="/login" />
    );

    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) =>
    //             user.email ? (
    //             children
    //             ) : (
    // <Navigate
    //     to={{
    //     pathname: "/login",
    //     state: { from: location }
    //     }}
    // />
    //             )
    //         }
    // />
    // );
};

export default PrivateRoute;