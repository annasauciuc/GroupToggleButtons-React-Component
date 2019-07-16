import React from "react";
import ToggleButton from "./../ToggleButton/ToggleButton";

class GroupToogleButtons extends React.Component {
  render() {
    const { days, toggleClass, active } = this.props;
    return (
      <div>
        <div className="btn-group" role="group">
          {days.map((day, i) => {
            return (
              <ToggleButton
                key={i}
                day={day}
                active={active}
                toggleClass={toggleClass}
              >
                {" "}
              </ToggleButton>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GroupToogleButtons;
