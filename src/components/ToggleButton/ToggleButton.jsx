import React, { useState } from "react";
import "./ToggleButton.css";

function ToggleButton({
  onButtonClick,
  valueOne,
  valueTwo,
  label,
  initState,
  ...props
}) {
  console.log(initState);
  const [activeButton, setActiveButton] = useState({
    active: initState != null ? initState : false,
  });

  const handleClick = () => {
    const buttonClicked = { ...activeButton };
    buttonClicked.active = !buttonClicked.active;
    setActiveButton(buttonClicked);
    onButtonClick(buttonClicked.active);
  };

  return (
    <form className="btn-toggle-container">
      <label>
        {label}
        <input
          className={`btn-toggle ${
            activeButton.active ? `active` : `inactive`
          }`}
          type="button"
          onClick={handleClick}
          value={activeButton.active ? valueOne : valueTwo}
          {...props}
        />
      </label>
    </form>
  );
}

export default ToggleButton;
