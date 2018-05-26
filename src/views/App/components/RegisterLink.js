import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const RegisterLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      ""
    ) : (
      <p>
        <Link to="/register">Register</Link>
      </p>
    )
);
