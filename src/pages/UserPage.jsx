
import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import Header from "../components/Header/Header";

function UserPage() {
    const [userData, setUserData] = useState({ opportunity: [] });
    const { id, username } = useParams();
    const thisUser = window.localStorage.getItem("username");
    const [noUser, setNoUser] = useState(false)

    let token = window.localStorage.getItem("token");



    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setUserData(data);
        });
        }, []);


     
    useEffect(() => {
        const headers = token ? {
            Authorization: `Token ${token}`,
        } : {}
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`, {
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
    }
    else {
        return (
            <div>
                <div id="header">
                    <Header />
                </div>

                <div className="profile-container">
                    <div className="profile">
                        <img alt="" className="profile-img" src={userData.image} />
                    </div>
                    <div className="profile">
                        <h2>{userData.username}</h2>
                        <h3>Joined {(userData.date_joined)}</h3>
                    </div>
                    <div className="profile">
                        <h2>{userData.favourites}</h2>
                    </div>
                    <div className="profile">
                        <h2>Bio</h2>
                        <p>{userData.bio}</p>
                    </div>
                </div>
            </div>
        )
};

export default UserPage;
