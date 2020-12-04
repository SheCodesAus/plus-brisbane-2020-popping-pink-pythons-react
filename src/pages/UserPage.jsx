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
            // console.log(data)
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
            <div>
                <Header />
                    <div>
                        <div className="grid-container">
                            <div className="profile-grid-1">
                                <h1>Profile</h1>
                            </div>
                            <div className="profile-grid-2">
                                <img alt="" className="profile-img" src={userData.image} />
                            </div>
                            <div className="profile-grid-3"> 
                                <div className="inner-3">
                                    <h2>{userData.username}</h2>
                                </div>
                                <div className="inner-3">
                                <h2>Joined on {convertDateTime(userData.date_created,0)}</h2>
                                </div>
                            </div>
                            <div className="profile-grid-4">
                                <div className="inner-4">
                                    <h1>1{userData.num_fav}</h1>
                                    <h3>favourite</h3>
                                </div>
                                <div className="inner-4">
                                    <h1>125</h1>
                                    <h3>interests</h3>
                                </div>
                                <div className="inner-4">
                                    <h1>4</h1>
                                    <h3>connections</h3>
                                </div>
                            </div>
                            <div className="profile-grid-5">
                                <div className="inner-5">
                                    <h2>Bio</h2>
                                    <p>{userData.bio}</p>
                                </div>
                            </div>
                            <div className="profile-grid-6">
                                <h1>Favourites</h1>
                            </div>
                            <div className="profile-grid-7">
                                <div className="inner-fave">
                                    <p>Favourite #1 - data to be pulled through as card</p>
                                </div>
                            </div>
                            <div className="profile-grid-8">
                                <div className="inner-fave">
                                    <p>Favourite #2 - data to be pulled through as card</p>
                                </div>
                            </div>
                            <div className="profile-grid-9">
                                <div className="inner-fave">
                                <   p>Favourite #3 - data to be pulled through as card</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>            
        );
    }
}


                        {/* <div className="favourites-container">
                            <p>this is where th faves go!</p>
                        </div> */}
export default UserPage;