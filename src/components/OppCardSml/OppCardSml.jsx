import React, { useState } from 'react';
import './OppCardSml.css';
import useModal from '../helpers/useModal';
import Modal from '../helpers/Modal';

function OppCardSml(props) {
    const { opportunityData } = props;
    const { isShowing, toggle } = useModal();
    const [opportunityId, setOpportunityId] = useState(0);
    let newOpportunityId = 0;

    const changeId = () => {
        newOpportunityId = window.localStorage.setItem("opportunity_id", opportunityData.id);
        setOpportunityId(newOpportunityId);
    }

    const handleClick = () => {
        console.log(opportunityData.id)
        changeId();
        toggle();
    }

    return (
        <div className = "sml-card-container">
            <button className="button-default" onClick={handleClick}>
                <img src={opportunityData.image} />
                <h3>{opportunityData.title}</h3>
                <h4>{`Amount: $${opportunityData.amount}`}</h4>
            </button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                opportunityId = {opportunityId}
            />
        </div>
    );
  };

export default OppCardSml;