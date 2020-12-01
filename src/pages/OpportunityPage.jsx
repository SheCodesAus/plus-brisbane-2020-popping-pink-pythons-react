import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import convertDateTime from "../components/helpers/DateConverter";
import "./OpportunityPage.css"

function OpportunityPage() {
  const [opportunityData, setOpportunityData] = useState([]);
  const { id } = useParams();
  
    let opportunityId = window.localStorage.getItem("opportunity_id").toString();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/opportunity/${id}/`).then((results) => {
            return results.json();
        }).then((data) => {
            setOpportunityData(data);
        });
    }, []);

    const postFavouriteData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/favourites/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id:{opportunityId}})
        });
        return response.json();};

    return (
        <div>
            <Header />
                <div className="opportunityPage">
                    <div className="column-1">
                        <h1 className="title">{opportunityData.title}</h1>
                        <img src={opportunityData.image} />
                        <p>Created at: {convertDateTime(opportunityData.date_created,0)}</p>
                        <p>Location: {opportunityData.location}</p>
                        <p>Organisation: {opportunityData.organisation}</p>
                        <p>Description:{opportunityData.description}</p>
                        <p>Amount required: {opportunityData.amount}</p>
                        <div id="actions">
                            <div>Link: {opportunityData.link}</div>
                            <div><button className="button" type="submit" onClick={postFavouriteData}>Add to  Favourites</button></div>
                        </div>
                    </div>
                    <div className="column-2">
                        <h3>Opportunity Objectives:</h3>
                        <p>{opportunityData.objectives}</p>
                    </div>                             
                </div>
        </div>
    );
}
export default OpportunityPage;
