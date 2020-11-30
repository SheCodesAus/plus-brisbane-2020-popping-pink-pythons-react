import React, { useState, useEffect } from 'react';
import OppCardSml from '../components/OppCardSml/OppCardSml'
import '../App.css';
import Header from "../components/Header/Header";

function FeedPage() {
    const [opportunityList, setOpportunityList] = useState([]);
    const [latestList, setLatestList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/opportunity`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setOpportunityList(data);
        });
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/opportunity/latest`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setLatestList(data);
        });
    }, []);
    
    return (
        <div>
            <Header />
            <div className="header-container">
                <div className="header-opportunity-list">
                    <h2>Feed</h2>
                </div>
                <div className="header-latest-list">
                    <h2>Latest Updates</h2>
                </div>
            </div>
            <div className="feed-page">            
                <div id="opportunity-list">
                    {opportunityList.map((opportunityData, key) => {
                        return <OppCardSml key={key} opportunityData = {opportunityData} />;
                    })}
                </div>
                <div id="latest-updates-list">
                    {latestList.map((opportunityData, key) => {
                        return <OppCardSml key={key} opportunityData = {opportunityData} />;
                    })}
                </div>
            </div>
        </div>
    );

}

export default FeedPage;