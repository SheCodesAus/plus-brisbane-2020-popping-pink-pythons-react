import React from "react";
import "./ButtonForms.css";

function ButtonForms({ value, url, ...props }) {
  return (
    <form className="btn-container-forms" action={url}>
      <input className="btn-forms" value={value} {...props} />
    </form>
  );
}

export default ButtonForms;
