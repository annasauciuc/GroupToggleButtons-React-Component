import React from "react";
import ToggleButton from "./../ToggleButton/ToggleButton";

class GroupToogleButtons extends React.Component {
  render() {
    const { values, onBtnClick, selectedBtn } = this.props;
    return (
      <div>
        <div className="btn-group" role="group">
          {values.map((value, i) => {
            return (
              <ToggleButton
                key={`button${i}`}
                value={value}
                selectedBtn={selectedBtn}
                onBtnClick={onBtnClick}
              >
                {" "}
              </ToggleButton>
            );
          })}
        </div>
        <p>Selected Day: {JSON.stringify(selectedBtn)}</p>
      </div>
    );
  }
}

export default GroupToogleButtons;
