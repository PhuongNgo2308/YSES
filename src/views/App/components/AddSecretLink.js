import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const AddSecretLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <p>
        <Link to="/addsecret">Add new Secret</Link>
      </p>
    ) : (
      ""
    )
);
