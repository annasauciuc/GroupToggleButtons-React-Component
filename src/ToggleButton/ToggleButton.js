import React from "react";
import "./ToggleButton.css";

const ToggleButton = props => {
  const { value, onBtnClick, selectedBtn } = props;
  const active = selectedBtn.includes(value) ? "active" : "";
  const classes = `btn btn-primary ${active}`;

  return (
    <button
      onClick={() => onBtnClick(value)}
      className={classes}
      aria-label={value}
      type="button"
      value={value}
    >
      {value}
    </button>
  );
};

export default ToggleButton;
