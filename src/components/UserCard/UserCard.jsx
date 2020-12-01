import React from "react";
import { Link } from "react-router-dom";
// import "./UserCard.css";

function UserCard(props) {
    const { userData } = props;
    return (
        <div className="user-card">
            <Link to={`/users/${userData.username}`}>
                <img src={userData.image} />
                <h3>{userData.num_fav}</h3>
                <h3>{userData.bio}</h3>
            </Link>
        </div>
    );
}
export default UserCard;