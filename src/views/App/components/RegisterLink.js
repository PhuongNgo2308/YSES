import React from "react";
import { Link, withRouter } from "react-router-dom";

import { AuthService } from "../../../services/AuthService";
import { IconPlus } from "../../../views/App/components/Icons";

export const RegisterLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      ""
    ) : (
      <p>
        <Link to="/register">
          <IconPlus />
          Register
        </Link>
      </p>
    )
);
