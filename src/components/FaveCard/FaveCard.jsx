import React, { useState, useEffect } from 'react';
import './FaveCard.css';
import convertDateTime from '../helpers/DateConverter';

function FaveCard() {
    const [userData, setUserData] = useState({ favourites: [] });
 
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

    return (
            <div className="fave-card">
                {userData.favourites.map((favouritesData, key) => {
                    return (
                        <div>
                            <img src={favouritesData.image} />
                            <h3>{favouritesData.title}</h3>
                            <h4>Closes on {convertDateTime(favouritesData.close_date,0)}</h4>
                            <h4>{favouritesData.opp_type} Amount: ${favouritesData.amount}</h4>
                        </div>
                    );
                })}
            </div>
    );
}

export default FaveCard;

