
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import Header from "../components/Header/Header";

function UserPage() {
    const [userData, setUserData] = useState([]);
    // const { username } = useParams();
    const username = window.sessionStorage.getItem("username");


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users/${username}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        });
    },[username]);


    return (
        <div>
                <Header />

            <div className="profile-container">
                <div className="profile">
                    <img alt="" className="profile-img" src={userData.image} />
                </div>

                    <h2>{userData.username}</h2>
                    <h3>Joined {userData.date_joined}</h3>

                <div className="profile">
                    <h2>{userData.favourites}</h2>
                </div>
                <div className="profile">
                    <h2>Bio</h2>
                    <p>{userData.bio}</p>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
