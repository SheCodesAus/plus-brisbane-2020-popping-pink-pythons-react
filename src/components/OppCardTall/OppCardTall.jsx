import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OppCardTall.css';
import convertDateTime from '../helpers/DateConverter';

function OppCardTall() {
    const [opportunityData, setOpportunityData] = useState([]);
    let id = window.localStorage.getItem("opportunity_id");
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/opportunity/${id}/`).then((results) => {
            return results.json();
        }).then((data) => {
            setOpportunityData(data);
        });
    }, []);

    return (
        <div className="card-container">
            <div className="opportunity-card-tall">
                <Link to={`/opportunity/${opportunityData.id}/`}>
                    <img src={opportunityData.image} />
                    <h3>{opportunityData.title}</h3>
                    <p>{opportunityData.description}</p>
                    <h4>{`Closes on ${convertDateTime(opportunityData.close_date,0)}`}</h4>
                    <h4>{`${opportunityData.opp_type} Amount: $${opportunityData.amount}`}</h4>
                </Link>
            </div>
        </div>
    );
}

export default OppCardTall;
