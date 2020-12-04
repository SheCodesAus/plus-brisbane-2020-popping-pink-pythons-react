import React, { useState, useEffect } from 'react';
import OppCardSml from '../components/OppCardSml/OppCardSml'
import '../App.css';
import './FeedPage.css';
import Header from "../components/Header/Header";
import feedHeader from '../components/images/feed-header.png';
import feedHeaderMobile from '../components/images/feed-header-blank.png';

function FeedPage() {
    const [opportunityList, setOpportunityList] = useState([]);
    const [latestList, setLatestList] = useState([]);
    const [q, setQ] = useState("");

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
                <div className="img-laptop">
                    <img src={feedHeader} />
                </div>
                <div className="img-mobile">
                    <img src={feedHeaderMobile} />
                </div>
                <div className="search-container">
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>
            </div>
            <div className="feed-page">            
                <div id="opportunity-list">
                    {opportunityList.filter(opportunity => opportunity.title.toLowerCase().indexOf(q) > -1).map((opportunityData, key) => {
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