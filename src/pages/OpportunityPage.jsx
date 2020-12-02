import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import convertDateTime from "../components/helpers/DateConverter";
import "./OpportunityPage.css"

function OpportunityPage() {
  const [opportunityData, setOpportunityData] = useState([]);
  const { id } = useParams();
  
    let opportunityId = window.localStorage.getItem("opportunity_id");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/opportunity/${id}/`).then((results) => {
            return results.json();
        }).then((data) => {
            setOpportunityData(data);
        });
    }, []);

    const postFavouriteData = async () => {
        let token = window.localStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_API_URL}/favourites/`, {
        method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Token ${token}`
        },
            body: JSON.stringify({
                'id': `${opportunityId}`
            }),
        });
        return response.json();};

    return (
        <div>
            <Header />

            <div className="container">

            <div><h1 className="title">{opportunityData.title}</h1></div>
                <div className="opportunityPage">
                    <div className="column-1">
                        <img src={opportunityData.image} />
                        <div id="oppDetails"><p>Created: {convertDateTime(opportunityData.date_created,0)}</p>
                            <p>Location: {opportunityData.location}</p>
                            <p>Organisation: {opportunityData.organisation}</p>
                            <h3>Details</h3><p>{opportunityData.description}</p>
                            <p>{opportunityData.opp_type} amount: {opportunityData.amount}</p></div>
                        <div id="actions">
                            <div><a href={opportunityData.opp_link}>Link to Apply</a></div>
                            <div><button className="button-opp" type="submit" onClick={postFavouriteData}>Add to  Favourites</button></div>
                        </div>
                    </div>
                    
                    <div className="column-2">
                        <div id="objectives"><h2>Opportunity Objectives:</h2></div>
                        <div id="objectives-text"><p>{opportunityData.objectives}</p></div>
                        <div id="location-map"><img src={`https://maps.googleapis.com/maps/api/staticmap?center=${opportunityData.location}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCNap1Ggt6008bL_GDv0D2lDJ-gMyJfr9U`} /></div>
                    </div>                             
                </div>
            </div>    
        </div>
    );
}
export default OpportunityPage;
