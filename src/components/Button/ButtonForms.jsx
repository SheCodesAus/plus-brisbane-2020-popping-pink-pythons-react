import React from "react";
import "./ButtonForms.css";

function ButtonForms({ value, url, ...props }) {
  return (
    <form className="btn-container" action={url}>
      <input className="btn" value={value} {...props} />
    </form>
  );
}

export default ButtonForms;
