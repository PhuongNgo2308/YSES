import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const HomeLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <p>
        <Link to="/">Home</Link>
      </p>
    ) : (
      <p>
        <Link to="/">Home</Link>
      </p>
    )
);
