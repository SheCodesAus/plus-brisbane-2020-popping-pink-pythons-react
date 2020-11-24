import React from "react";
import { Link } from "react-router-dom";

function ActionButton() {
    return (
        <div className="button">
        <Link to="/feed">
        <button type="button" className="btn btn-info">You are Welcome</button>
        </Link>
        </div>
    )
}

export default ActionButton;