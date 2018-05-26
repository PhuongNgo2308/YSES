import React from "react";
import { Link, withRouter } from "react-router-dom";

import { AuthService } from "../../../services/AuthService";
import { IconLogin } from "../../../views/App/components/Icons";

export const AuthLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <p>
        <span>
          Welcome,{" "}
          <Link to={"/userinfo/" + AuthService.currentUser.id}>
            {AuthService.currentUser.name}
          </Link>!
          <button
            className="signout-btn"
            onClick={() => {
              AuthService.signout(() => history.push("/"));
            }}
          >
            Sign out
          </button>
        </span>
      </p>
    ) : (
      <p>
        <Link to="/login">
          <IconLogin />Login
        </Link>
      </p>
    )
);
