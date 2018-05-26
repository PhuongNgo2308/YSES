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

//custom components
import { IconHelp } from "../../../../views/App/components/Icons";

export default class MyKeyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userkey: "",
      enckey: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }

  handleClick = () => {
    this.Form.validateAll();
  };

  handleSubmit = evt => {
    Form.validate();

    evt.preventDefault();

    const data = new FormData(evt.target);

    alert("123");
  };

  render() {
    return (
      <AnimLayout>
        <div className="register-div">
          <h2>My Key Settings</h2>

          <Form onSubmit={this.handleSubmit}>
            <label>
              Your secret key <IconHelp />
              <Input
                value={this.state.userkey}
                placeholder="Your private key"
                name="userkey"
                validations={[ValidationType.REQUIRED]}
              />
            </label>

            <label>
              Encryption key <IconHelp />
              <Input
                value={this.state.enckey}
                placeholder="Key used for data encryption"
                name="enckey"
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
                  Save
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
