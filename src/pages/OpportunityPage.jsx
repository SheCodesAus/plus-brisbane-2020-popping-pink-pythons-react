import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OpportunityPage() {
    const [opportunityData, setOpportunityData] = useState({ pledges: [] });
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}opportunity/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setOpportunityData(data);
        });
    }, []);

    return (
        <div>
        <h2>{ projectData .title}</h2>
        <h3>Created at: { projectData .date_created}</h3>
        <h3> {` Status: $ { opportunityData .is_open} `} </h3>
        <h3>Pledges:</h3>
    </div>
    );
}
export default OpportunityPage;
