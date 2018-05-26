import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const MyKeyLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <p>
        <Link to="/mykey">My Key</Link>
      </p>
    ) : (
      ""
    )
);
