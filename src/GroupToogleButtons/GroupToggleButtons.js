import React from "react";
import ToggleButton from "./../ToggleButton/ToggleButton";

class GroupToogleButtons extends React.Component {
  render() {
    const { days, onBtnClick, selectedBtn } = this.props;
    return (
      <div>
        <div className="btn-group" role="group">
          {days.map((day, i) => {
            return (
              <ToggleButton
                key={i}
                day={day}
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
