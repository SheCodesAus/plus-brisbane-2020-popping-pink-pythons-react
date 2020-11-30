import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewOpportunityForm.css";

function NewOpportunityForm() {
  const [opportunityData, setOpportunityData] = useState({
    title: "",
    location: "",
    organisation: "",
    description: "",
    objectives: "",
    image: "",
    start_date: "",
    close_date: "",
    amount: "",
    opp_type: "",
    opp_link: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setOpportunityData((prevOpportunityData) => ({
      ...prevOpportunityData,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/createOpportunity`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(opportunityData),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      opportunityData.title &&
      opportunityData.location &&
      opportunityData.organisation &&
      opportunityData.description &&
      opportunityData.objectives &&
      opportunityData.start_date &&
      opportunityData.close_date &&
      opportunityData.amount &&
      opportunityData.opp_type
    ) {
      postData().then((response) => {
        console.log(response);
        history.push(`/opportunity/${response.id}`);
      });
    }
  };

  return (
    <form>
      <div className="form-wrap">
        <label htmlFor="title">Opportunity Title</label>
        <input type="text" id="title" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="organisation">Organisation</label>
        <input type="text" id="organisation" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="objectives">Objectives</label>
        <input type="text" id="objectives" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="image">Image</label>
        <input type="text" id="image" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="start_date">Start Date</label>
        <input type="date" id="start_date" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="close_date">Close Date</label>
        <input type="date" id="close_date" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" onChange={handleChange} />
      </div>
      <div className="form-wrap">
        <label htmlFor="opp_type">Opportunity Type</label>
        <input type="text" id="opp_type" onChange={handleChange} />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Create Opportunity
      </button>
    </form>
  );
}

export default NewOpportunityForm;
