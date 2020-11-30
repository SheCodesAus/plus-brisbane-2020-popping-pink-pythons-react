import React, { useState, useEffect } from 'react';
import OppCardSml from '../components/OppCardSml/OppCardSml'
import '../App.css';
import Header from "../components/Header/Header";

function FeedPage() {
    const [opportunityList, setOpportunityList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/opportunity`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setOpportunityList(data);
        });
    }, []);
    
    return (
        <div>
            <Header />
            <div id="opportunity-list">
                {opportunityList.map((opportunityData, key) => {
                    return <OppCardSml key={key} opportunityData = {opportunityData} />;
                })}
            </div>
        </div>
    );

}

export default FeedPage;