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
        <div className="container">
            <Header />
            <h1 id="title">{opportunityData.title}</h1>
            <div className="opportunityPage">
                    
                    <div className="column-1">
                        <img src={opportunityData.image} />
                        <div id="oppDetails">
                            <p>Created: {convertDateTime(opportunityData.date_created,0)}</p>
                            <h3>Organisation: {opportunityData.organisation}</h3>
                            <h3>Details</h3><p>{opportunityData.description}</p>
                            <p>{opportunityData.opp_type} amount: {opportunityData.amount}</p>
                        </div>
                        <div id="actions">
                            <div><button className="button-opp"><a href={opportunityData.opp_link}><u>Apply Here</u></a></button></div>
                            <div><button className="button-opp" type="submit" onClick={postFavouriteData}>Add to  Favourites</button></div>
                        </div>
                    </div>
                    <div className="column-2">
                        <div id="objectives-opp"><h2>Opportunity Objectives</h2></div>
                        <div id="objectives-opp-text"><p>{opportunityData.objectives}</p></div>
                        <div id="location-map"><h3>Location: {opportunityData.location}</h3><img src={`https://maps.googleapis.com/maps/api/staticmap?center=${opportunityData.location}&zoom=13&size=600x300&maptype=roadmap&markers=color:purple%7C${opportunityData.location}&key=AIzaSyCNap1Ggt6008bL_GDv0D2lDJ-gMyJfr9U`} /></div>
                    </div>                             
            </div>
    </div> 
    );
}
export default OpportunityPage;
