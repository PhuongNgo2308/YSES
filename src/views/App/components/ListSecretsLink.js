import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const ListSecretsLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <p>
        <Link to="/listsecrets">My Secrets</Link>
      </p>
    ) : (
      ""
    )
);
