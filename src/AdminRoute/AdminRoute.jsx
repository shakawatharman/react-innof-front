import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading, admin } = useAuth();

  if (loading) {
    return <CircularProgress />;
  }

  return user.email && admin ? children : <Navigate to="/" />;

  // with react router v5

  // return (
  //     <Route
  //         {...rest}
  //         render={({ location }) =>
  //             user.email && admin ? (
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

export default AdminRoute;
