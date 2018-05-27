// common components
import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import CryptoJS from "crypto-js";

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

  handleSubmit = evt => {
    evt.preventDefault();

    const data = new FormData(evt.target);

    let userkey = data.get("userkey");
    let enckey = data.get("enckey");

    // encypt encryption key using user's key
    let encrypted_enckey = CryptoJS.AES.encrypt(enckey, userkey);
    //decrypt
    let bytes = CryptoJS.AES.decrypt(encrypted_enckey.toString(), userkey);
    let decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    alert(
      "your key: " +
        userkey +
        "\nyour encryption key: " +
        enckey +
        "\nyour encrypted enckey: " +
        encrypted_enckey +
        "\ndecrypted enckey: " +
        decryptedData
    );
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
                autoFocus
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
                <Button className="button clicker fast">Save</Button>
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
