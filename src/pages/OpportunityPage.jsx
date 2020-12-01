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
                        <h1>{opportunityData.title}</h1>
                        <img src={opportunityData.image} />
                        <h3>Created at: {convertDateTime(opportunityData.date_created,0)}</h3>
                        <h3>Location: {opportunityData.location}</h3>
                        <h3>Organisation: {opportunityData.organisation}</h3>
                        <h3>Description:{opportunityData.description}</h3>
                        <h3>Amount required: {opportunityData.amount}</h3>
                        <h3>Link: {opportunityData.link}</h3>
                    </div>
                    <div className="column-2">
                        <h3>Opportunity Objectives:{opportunityData.objectives}</h3>
                    </div>
                    <div>
                        <button type="submit" onClick={postFavouriteData}>Click</button>
                     </div>          
                </div>
        </div>
    );
}
export default OpportunityPage;
