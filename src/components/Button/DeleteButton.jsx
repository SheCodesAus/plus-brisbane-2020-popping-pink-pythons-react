import React from "react";
import ButtonForms from "../Button/ButtonForms";
import "./DeleteButton.css";

function DeleteButton({ contentOwner, ...props }) {
  const userID = window.localStorage.getItem("userID");

  if (`${contentOwner}` === userID) {
    return (
      <div className="delete-button">
        <ButtonForms value="Delete" type="button" {...props} />
      </div>
    );
  }
  return null;
}

export default DeleteButton;
