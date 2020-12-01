import React from "react";
import ButtonForms from "../Button/ButtonForms";
import "./EditButton.css";

function EditButton({ contentOwner, ...props }) {
  const userID = window.localStorage.getItem("userID");

  if (`${contentOwner}` === userID) {
    return (
      <div className="edit-button">
        <ButtonForms value="Edit" type="button" {...props} />
      </div>
    );
  }
  return null;
}

export default EditButton;
