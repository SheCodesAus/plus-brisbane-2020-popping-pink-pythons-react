import React, { useState, useEffect } from 'react';
import convertDateTime from "../components/helpers/DateConverter";
import "./UserPage.css";
import Header from "../components/Header/Header";
import FaveCard from "../components/FaveCard/FaveCard";


function UserPage() {
    const [userData, setUserData] = useState({ favourites: [] } );
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

                <div className="grid-container">
                    <div className="grid-header">
                    </div>

                    <div className="profile-container">
                        <div className="grid-profile">
                            <div className="grid-pic">
                                <img alt="" className="profile-img" src={userData.image} />
                            </div>
                            <div className="grid-name-container"> 
                                <div className="e">
                                    <h1>{userData.username}</h1>
                                </div>
                                <div className="f">
                                    <h3>Joined on {convertDateTime(userData.date_created,0)}</h3>
                                </div>
                            </div>
                            <div className="action"> 
                                <button className="btn hover">Edit
                                </button>
                            </div>
                            <div className="grid g">
                                <div className="grid-stats hover g">
                                    <div className="grid h">
                                        <h1>{userData.num_fav}</h1>
                                        <h3>favourites</h3>
                                    </div>
                                    <div className="grid i">
                                        <h1>125</h1>
                                        <h3>interests</h3>
                                    </div>
                                    <div className="grid j">
                                        <h1>4</h1>
                                        <h3>connections</h3>
                                    </div>
                                </div>
                            </div>                                    
                        </div>
                    </div>
                            
                    <div className="grid-bio">
                        <div className="grid l">
                            <h1>Profile</h1>
                        </div>
                        <div className="grid m">
                            <h4>{userData.bio}</h4>
                        </div>
                    </div>

                    <div className="favourites-container">
                            <div className="grid-favourites">
                                <div className="grid o">
                                    <h1>Favourites</h1>
                                </div>
                                <div className="grid p">
                                    {userData.favourites.map((favouritesData, key) => {
                                    return <FaveCard key={key} favouritesData = {favouritesData} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default UserPage;