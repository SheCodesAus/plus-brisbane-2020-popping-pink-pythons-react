import React, { useState } from "react";
import "./ToolTip.css";

function ToolTip({ toolTipInfo }) {
  const [showToolTip, setToolTip] = useState(false);

  const handleMouseOver = (e) => {
    setToolTip(true);
  };

  const handleMouseOut = (e) => {
    setToolTip(false);
  };

  return (
    <div className="toolip-container">
      <input
        type="button"
        value="i"
        className="tooltip-icon"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onTouchStart={handleMouseOver}
        onTouchEnd={handleMouseOut}
      />
      {showToolTip ? (
        <div className="tooltip right">
          <div className="tooltip-arrow" />
          <div className="tooltip-label">{toolTipInfo}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ToolTip;
