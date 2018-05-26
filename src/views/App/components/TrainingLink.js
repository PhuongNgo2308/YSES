import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const TraningLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      ""
    ) : (
      <p>
        <Link to="/training">Training</Link>
      </p>
    )
);
