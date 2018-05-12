// common components
import React from "react";
// custom layout
import AnimLayout from "../../../../views/App/AnimLayout";

export default class TrainingView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fav: "game"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = evt => {
    this.setState({
      fav: evt.target.value
    });
  };

  handleSubmit = evt => {
    alert("My favorite thing is: " + this.state.fav);
    evt.preventDefault();
  };

  render() {
    return (
      <AnimLayout>
        <div className="Training-div">
          <form onSubmit={this.handleSubmit}>
            <h2>Training view</h2>
            <p>
              <label>
                Select your fav things:
                <br />
                <select value={this.state.fav} onChange={this.handleChange}>
                  <option value="game">Games</option>
                  <option value="football">Football</option>
                  <option value="music">Music</option>
                  <option value="programming">Programming</option>
                </select>
              </label>
              <input type="submit" value="submit" />
            </p>
          </form>
        </div>
      </AnimLayout>
    );
  }
}
