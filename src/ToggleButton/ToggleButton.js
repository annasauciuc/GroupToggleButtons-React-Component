import React from "react";
import "./ToggleButton.css";


const ToggleButton = props => {
  const { day, onBtnClick, selectedBtn } = props;
  const active = selectedBtn.includes(day) ? "active" : "";
  const classes = `btn btn-primary ${active}`;

  return (
    <button
      onClick={() => onBtnClick(day)}
      className={classes}
      aria-label={day}
      type="button"
    >
      {day}
    </button>
  );
};

export default ToggleButton;
