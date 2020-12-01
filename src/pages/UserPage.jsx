import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import convertDateTime from "../components/helpers/DateConverter";
import "./UserPage.css"
import Header from "../components/Header/Header";

function UserPage() {
    const [userData, setUserData] = useState( [] );
    const { username } = useParams();
    const [noUser, setNoUser] = useState(false)

    let token = window.localStorage.getItem("token");

   
    useEffect(() => {
        const headers = token ? {
            Authorization: `Token ${token}`,
        } : {}
        fetch(`${process.env.REACT_APP_API_URL}/users/${username}`, {
            headers
         })
        .then((data) => {
            setUserData(data);
        });
    }, [username]);

    if (noUser === true) {
        return (
            <div>
                <Header />
                <h1>This user doesn't exist</h1>
            </div>
        )
    } else {
        return (
            <div className="outer-container">
                <Header />
                <h1>{userData.username}</h1>

                <div className="profile-container">
                    <div className="img-container">
                        <img alt="" className="profile-img" src={userData.image} />
                    </div>
                    <div>
                        <h3>Member since {convertDateTime(userData.date_created,0)}</h3>
                        <h3>{userData.num_fav}</h3>
                        
                    </div>
                    <div className="bio-container">
                        <h3>Bio</h3>
                        <p>{userData.bio}</p>
                    </div>
               </div> 
            </div>
        );
    }
}

export default UserPage;