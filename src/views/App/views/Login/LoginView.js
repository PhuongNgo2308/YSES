// common components
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
// routing components
import { Redirect } from "react-router-dom";
// custom extensions
import ValidationType from "../../../../extensions/ValidationType";
// custom services
import { AuthService } from "../../../../services/AuthService";
// custom layout
import AnimLayout from "../../../../views/App/AnimLayout";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    redirectToReferrer: false
  };

  handleSubmit = event => {
    event.preventDefault();

    AuthService.auth(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <AnimLayout>
        <div className="login-div">
          <h2>Login</h2>

          <Form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Email*
              <Input
                value="123@mail.com"
                placeholder="Your email address"
                name="email"
                validations={[ValidationType.REQUIRED, ValidationType.EMAIL]}
              />
            </label>

            <label>
              Password*
              <Input
                value="12312312312"
                placeholder="Your password"
                type="password"
                name="password"
                minLength="8"
                validations={[ValidationType.REQUIRED, ValidationType.GT]}
              />
            </label>

            <div>
              <Button className="button">Submit</Button>
            </div>
          </Form>
        </div>
      </AnimLayout>
    );
  }
}
