import React from 'react';
import { Link } from 'react-router-dom';
import './OppCardSml.css';

function OppCardSml(props) {
    const { opportunityData } = props;
    return (
        <div className="opportunity-card-sml">
            <Link to={`/opportunity/${opportunityData.id}`}>
                <img src={opportunityData.image} />
                <h3>{opportunityData.title}</h3>
                <h4>{`Goal: $${opportunityData.amount}`}</h4>
            </Link>
        </div>
    );
}

export default OppCardSml;