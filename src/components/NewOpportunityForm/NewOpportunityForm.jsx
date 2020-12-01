import React, { useState, useEffect } from "react";
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
    <div className="submit-opportunity-form">
      <TitleText title="Create an Opportunity" />
      <TextInput
        id="title"
        type="text"
        label="Opportunity Title"
        placeholder="Give your Opportunity a welcoming name!"
        onChange={handleChange}
        error={errorMessages.title}
      />
      <TextInput
        id="location"
        type="text"
        label="Opportunity Location"
        placeholder="Where is your opportunity located?"
        onChange={handleChange}
        error={errorMessages.title}
      />
      <TextInput
        id="organisation"
        type="text"
        label="Organisation"
        placeholder="Name of the organisation"
        onChange={handleChange}
        error={errorMessages.title}
      />
      <TextArea
        id="description"
        type="text"
        label="Opportunity Summary"
        placeholder="Tell us what this Opportunity is all about"
        error={errorMessages.description}
        onChange={handleChange}
      />
      <TextInput
        id="amount"
        type="integer"
        label="Opportunity Amount Offered"
        placeholder="0"
        onChange={handleChange}
        error={errorMessages.amount}
      />
      <TextInput
        id="image"
        type="url"
        label="Image URL"
        placeholder="Enter a URL to your most eye catching photo"
        onChange={handleChange}
        error={errorMessages.image}
      />
      <ButtonForms
        value="Create Project"
        onClick={handleSubmit}
        type="submit"
      />
    </div>
  );
}

export default NewOpportunityForm;
