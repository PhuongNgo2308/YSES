// third parties
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

// auth service
import * as firebaseAuth from "../../../../services/firebaseAuth";

// custom functions
import { byPropKey } from "../../../../extensions/handling";

// custom constants
import { ROUTES } from "../../../../global/ROUTES";
import AnimLayout from "../../../../views/App/AnimLayout";
import ValidationType from "../../../../extensions/ValidationType";
import { SignUpLink } from "../SignUp/SignUpView";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: ""
};

const SignInView = ({ history }) => (
  <AnimLayout>
    <div className="div-signup">
      <h2>Sign In</h2>
      <SignInForm history={history} />
      <br />
      <SignUpLink />
    </div>
  </AnimLayout>
);

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username, email, password } = this.state;
    const { history } = this.props;

    firebaseAuth
      .signIn(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    return (
      <div className="div-signinform">
        <Form onSubmit={this.handleSubmit}>
          <label>
            Email*
            <Input
              autoFocus
              placeholder="Your email address"
              name="email"
              validations={[ValidationType.REQUIRED, ValidationType.EMAIL]}
              value={this.state.email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
          </label>

          <label>
            Password*
            <Input
              placeholder="Your password"
              type="password"
              name="password"
              minLength="8"
              validations={[ValidationType.REQUIRED, ValidationType.GT]}
              value={this.state.password}
              onChange={event =>
                this.setState(byPropKey("password", event.target.value))
              }
            />
          </label>

          <div>
            <Button className="button">Sign In</Button>

            <Link className="back" to={ROUTES.HOME}>
              Back
            </Link>
          </div>

          {this.state.error && (
            <p className="p-error">{this.state.error.message}</p>
          )}
        </Form>
      </div>
    );
  }
}

export default SignInView;
