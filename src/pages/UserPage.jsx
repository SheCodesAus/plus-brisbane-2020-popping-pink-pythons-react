import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import convertDateTime from "../components/helpers/DateConverter";
import DeleteConfirm from "../components/helpers/DeleteConfirm";
import "./UserPage.css";
import Header from "../components/Header/Header";

function UserPage() {
    //variables
    const [userData, setUserData] = useState( [] );
    const { username } = useParams();
    const token = window.localStorage.getItem("token");
    const [noUser, setNoUser] = useState(false)


     
    useEffect(() => {
        const headers = token ? {
            Authorization: `Token ${token}`,
        } : {}
        fetch(`${process.env.REACT_APP_API_URL}/users/${username}/profile/`, {
            headers
         })
        .then((results) => {
            if (results.status === 404) {
                setNoUser(true)
            }
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        });
    }, [username, token]);


    if (noUser === true) {
        return (
            <div className="blankPage">
                <h1>This user doesn't exist</h1>
            </div>
        )
    } else {
        return (
            <div className="outer-container">
                <Header />

                <h1>{userData.username}</h1>


                    
                <div className="">
                    <div className="prof-container-img">
                        <img alt="" className="profile-img" src={userData.pic} />
                    </div>
                    <div className="prof-container-info pad-lr-30">
                        <h3 className="centered">Member since {convertDateTime(userData.date_joined,0)}</h3>
                        <p>{userData.bio}</p>
                    </div>
                </div>       
            
     


            
            {/* <h2 className="centered">Projects</h2>
                <ListProject items={userData.owner_projects} fallback={<p className="centered">No projects to show</p>} /> */}

                <div className="wrapper">
                    <h2 className="centered mt-20">Projects</h2>
                    <div className="project-list">
                    </div>
               </div>

                <div className="centered buttons">
                    {/* <Link to={`/user/${username}/edit/`}><button className="mr-10 btn-small">Edit Profile</button></Link> */}
                    <DeleteConfirm id = {username} type="user" />
                </div> 

        
        </div>
    );
}
}

export default UserPage;

