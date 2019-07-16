import React, { Component } from "react";
import "./App.css";
import GroupToogleButtons from "./GroupToogleButtons/GroupToggleButtons";

class App extends Component {
  constructor(props) {
    super(props);

    this.onBtnClick = this.onBtnClick.bind(this);
    this.state = {
      selectedBtn: [],
      days: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
      ]
    };
  }

  onBtnClick(selected) {
    const index = this.state.selectedBtn.indexOf(selected);
    if (index < 0) {
      this.state.selectedBtn.push(selected);
    } else {
      this.state.selectedBtn.splice(index, 1);
    }
    this.setState({ selectedBtn: [...this.state.selectedBtn] });
  }
  render() {
    const { days, selectedBtn } = this.state;

    return (
      <div className="container centered">
        <GroupToogleButtons
          values={days}
          selectedBtn={selectedBtn}
          onBtnClick={this.onBtnClick}
        />
      </div>
    );
  }
}
export default App;
