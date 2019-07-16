import React from "react";
import "./ToggleButton.css";
const ToggleButton = props => {
  const { day, toggleClass, active } = props;
  const activeClass = active ? "active" : "";
  const classes = `btn btn-default ${activeClass}`;
  console.log('props :', props);

  return (
    <button
      onClick={toggleClass}
      aria-label={day}
      type="button"
      className={classes}
    >
      {day}
    </button>
  );
};

export default ToggleButton;
