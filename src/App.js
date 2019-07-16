import React, { Component } from "react";
import "./App.css";
import GroupToogleButtons from "./GroupToogleButtons/GroupToggleButtons";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  }
  toggleClass() {
   
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    const { days, active } = this.state;

    return (
      <div className="container">
        <GroupToogleButtons
          days={days}
          active={active}
          toggleClass={this.toggleClass}
        />
      </div>
    );
  }
}
export default App;
