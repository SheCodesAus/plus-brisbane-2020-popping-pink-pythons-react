import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import convertDateTime from "../components/helpers/DateConverter";

function OpportunityPage() {
    const [opportunityData, setOpportunityData] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/opportunity/${id}/`).then((results) => {
            return results.json();
        }).then((data) => {
            setOpportunityData(data);
        });
    }, []);

    return (
        <div>
            <Header />
            <div>
                <h1>{opportunityData.title}</h1>
                <h3>Created at: {convertDateTime(opportunityData.date_created,0)}</h3>
                {/* <h3> {` Status: $ { opportunityData.is_open} `} </h3> */}
                <h3>Opportunity Objectives:</h3>
            </div>
        </div>
    );
}
export default OpportunityPage;
