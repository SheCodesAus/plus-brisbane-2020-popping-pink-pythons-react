import React, { useState, useEffect } from 'react';
import convertDateTime from "../components/helpers/DateConverter";
import "./UserPage.css"
import Header from "../components/Header/Header";

function UserPage() {
    const [userData, setUserData] = useState( [] );
    const [noUser, setNoUser] = useState(false)

 
    useEffect(() => {
        let token = window.localStorage.getItem("token");
        fetch(`${process.env.REACT_APP_API_URL}/users/currentuser`,{
            method: "get",
            headers: {
            'Authorization': `Token ${token}`
        }})
        .then((results) => {
            return results.json();
        }).then((data) => {
            setUserData(data);
            console.log(data)
        });
    }, []);


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
                        <h2>Joined {convertDateTime(userData.date_created,0)}</h2>
                        <h2>{userData.num_fav}</h2>
                        
                    </div>
                    <div className="bio-container">
                        <h2>Bio</h2>
                        <p>{userData.bio}</p>
                    </div>
               </div> 
            </div>
        );
    }
}

export default UserPage;