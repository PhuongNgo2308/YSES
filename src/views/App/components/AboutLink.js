import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const AboutLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      ""
    ) : (
      <p>
        <Link to="/about">About</Link>
      </p>
    )
);
