import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ButtonForms from "../../components/Button/ButtonForms";
import TextArea from "../../components/TextArea/TextArea";
import TextInput from "../../components/TextInput/TextInput";
import TitleText from "../../components/TitleText/TitleText";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import "./NewOpportunityForm.css";

function NewOpportunityForm() {
  //variables
  const date = new Date();
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const [opportunity, setOpportunity] = useState({
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

  const [errorMessages, setErrors] = useState({
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

  //Methods

  const validAmountRegex = RegExp(/[0-9]{1,}/);

  //Check input values
  const validateInput = () => {
    let errors = { ...errorMessages };

    errors.title = opportunity.title.length < 2 ? "Enter a title" : "";

    errors.organisation =
      opportunity.organisation.length < 2 ? "Enter an organisation name" : "";

    errors.location =
      opportunity.location.length < 2 ? "Enter city/ suburb name" : "";

    errors.description =
      opportunity.description.length < 5 ? "Enter a longer description" : "";

    errors.amount = validAmountRegex.test(opportunity.amount)
      ? ""
      : "Enter a valid whole number amount";

    errors.opp_type =
      opportunity.opp_type.length < 2 ? "Enter the type of opportunity" : "";

    errors.opp_link =
      opportunity.opp_link.length < 5 ? "Enter a valid external url link" : "";

    return errors;
  };

  //If error exists
  const validateForm = () => {
    const errors = validateInput();
    const firstValidationError = Object.values(errors).find(
      (error) => error.length > 0
    );

    setErrors(errors);
    return firstValidationError === undefined;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setOpportunity((opportunityDetails) => ({
      ...opportunityDetails,
      [id]: value,
    }));
  };

  useEffect(() => {
    const match = validAmountRegex.exec(opportunity.amount);
    if (match) opportunity.amount = match[0];
  }, [opportunity.amount, validAmountRegex]);

  const onButtonClick = (activeButton) => {
    setOpportunity((opportunity) => ({
      ...opportunity,
      is_open: activeButton,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/opportunity/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(opportunity),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        console.log(response);
        history.push(`/opportunity/${response.id}/`);
      });
    } else {
      console.log("invalid form");
    }
  };

  return (
    <div className="submit-opportunity-form">
      <TitleText title="List an opportunity" />
      <TextInput
        id="title"
        type="text"
        label="Opportunity Title"
        placeholder="Give your opportunity a welcoming name!"
        onChange={handleChange}
        error={errorMessages.title}
      />
      <TextInput
        id="location"
        type="text"
        label="Opportunity Location"
        placeholder="Where is your opportunity located?"
        onChange={handleChange}
        error={errorMessages.location}
      />
      <TextInput
        id="organisation"
        type="text"
        label="Organisation"
        placeholder="Name of the organisation"
        onChange={handleChange}
        error={errorMessages.organisation}
      />
      <TextArea
        id="description"
        type="text"
        label="Opportunity Description"
        placeholder="Tell us what this opportunity is all about"
        error={errorMessages.description}
        onChange={handleChange}
      />
      <TextInput
        id="objectives"
        type="text"
        label="Opportunity Objectives"
        placeholder="What are the key objectives of this opportunity"
        error={errorMessages.objectives}
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
        placeholder="Enter a URL to an image"
        onChange={handleChange}
        error={errorMessages.image}
      />
      <TextInput
        id="start_date"
        type="date"
        label="Start_Date"
        placeholder="When is the starting date?"
        onChange={handleChange}
      />
      <TextInput
        id="close_date"
        type="date"
        label="Close_Date"
        placeholder="When is the closing date?"
        onChange={handleChange}
      />
      <TextInput
        id="opp_type"
        type="text"
        label="Opportunity Type"
        placeholder="What type of opportunity is this?"
        onChange={handleChange}
        error={errorMessages.opp_type}
      />
      <TextInput
        id="opp_link"
        type="url"
        label="Opportunity Link"
        placeholder="Provide a link to this opportunity"
        onChange={handleChange}
        error={errorMessages.opp_link}
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
