// common components
import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

// routing components
import { Link } from "react-router-dom";

// custom extensions
import ValidationType from "../../../../extensions/ValidationType";

// custom layout
import AnimLayout from "../../../../views/App/AnimLayout";

export default class RegisterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }

  handleClick = () => {
    debugger;

    this.form.validateAll();
  };

  handleSubmit = evt => {
    evt.preventDefault();
    debugger;
    const data = new FormData(evt.target);

    alert("123");
  };

  render() {
    return (
      <AnimLayout>
        <div className="register-div">
          <h2>Register</h2>

          <Form
            ref={c => {
              this.form = c;
            }}
            onSubmit={this.handleSubmit}
          >
            <label>
              Email*
              <Input
                autoFocus
                value={this.state.email}
                placeholder="Your email address"
                name="email"
                validations={[ValidationType.REQUIRED, ValidationType.EMAIL]}
              />
            </label>

            <label>
              Password*
              <Input
                value={this.state.password}
                placeholder="Your password"
                type="password"
                name="password"
                minLength="8"
                validations={[ValidationType.REQUIRED, ValidationType.GT]}
              />
            </label>

            <div>
              <div class="wrap">
                <Button
                  className="button clicker fast"
                  onClick={this.handleClick}
                >
                  Submit
                </Button>
                <div class="circle angled second" />
              </div>

              <Link className="back" to="/">
                Cancel
              </Link>
            </div>
          </Form>
        </div>
      </AnimLayout>
    );
  }
}
