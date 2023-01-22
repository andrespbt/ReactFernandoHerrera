import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";
import PropTypes from "prop-types";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/" />;
};

PublicRoute.propTypes = {
  children: PropTypes.element,
};
