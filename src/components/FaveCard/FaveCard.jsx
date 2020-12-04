import React, { useState, useEffect } from 'react';
import './FaveCard.css';
import convertDateTime from '../helpers/DateConverter';
import useModal from '../helpers/useModal';
import Modal from '../helpers/Modal';


function FaveCard(props) {
    const { favouritesData } = props;
    const { isShowing, toggle } = useModal();
    const [favouritesId, setFavouritesId] = useState(0);
    let newFavouritesId = 0;


    const changeId = () => {
        newFavouritesId = window.localStorage.setItem("favourites_id", favouritesData.id);
        setFavouritesId(newFavouritesId);
    }

    const handleClick = () => {
        console.log(favouritesData.id)
        changeId();
        toggle();
    }

    return (
        <div className="fave-card-container">
            <button className="fave-button" onClick={handleClick}>
                <img src={favouritesData.image} />
                <h3>{favouritesData.title}</h3>
                <h4>Closes on {convertDateTime(favouritesData.close_date,0)}</h4>
                <h4>{favouritesData.opp_type} Amount: $ {favouritesData.amount}</h4>
            </button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                favouritesId = {favouritesId}
            />
        </div>
    );
}

export default FaveCard;


    // const [userData, setUserData] = useState({ favourites: [] });

 
    // useEffect(() => {
    //     let token = window.localStorage.getItem("token");
    //     fetch(`${process.env.REACT_APP_API_URL}/users/currentuser`,{
    //         method: "get",
    //         headers: {
    //         'Authorization': `Token ${token}`
    //     }})
    //     .then((results) => {
    //         return results.json();
    //     }).then((data) => {
    //         setUserData(data);
    //         console.log(data)
    //     });
    // }, []);
