// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import "./NewOpportunityForm.css";

// function NewOpportunityForm() {
//   const [opportunityData, setOpportunityData] = useState({
// title: "",
// location: "",
// organisation: "",
// description: "",
// objectives: "",
// image: "",
// start_date: "",
// close_date: "",
// amount: "",
// opp_type: "",
// opp_link: "",
//   });

//   const history = useHistory();

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setOpportunityData((prevOpportunityData) => ({
//       ...prevOpportunityData,
//       [id]: value,
//     }));
//   };

//   const postData = async () => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/createOpportunity`,
//       {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(opportunityData),
//       }
//     );
//     return response.json();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       opportunityData.title &&
//       opportunityData.location &&
//       opportunityData.organisation &&
//       opportunityData.description &&
//       opportunityData.objectives &&
//       opportunityData.start_date &&
//       opportunityData.close_date &&
//       opportunityData.amount &&
//       opportunityData.opp_type
//     ) {
//       postData().then((response) => {
//         console.log(response);
//         history.push(`/opportunity/${response.id}`);
//       });
//     }
//   };

//   return (
//     <form>
//       <div className="form-wrap">
//         <label htmlFor="title">Opportunity Title</label>
//         <input type="text" id="title" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="location">Location</label>
//         <input type="text" id="location" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="organisation">Organisation</label>
//         <input type="text" id="organisation" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="description">Description</label>
//         <input type="text" id="description" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="objectives">Objectives</label>
//         <input type="text" id="objectives" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="image">Image</label>
//         <input type="text" id="image" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="start_date">Start Date</label>
//         <input type="date" id="start_date" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="close_date">Close Date</label>
//         <input type="date" id="close_date" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="amount">Amount</label>
//         <input type="number" id="amount" onChange={handleChange} />
//       </div>
//       <div className="form-wrap">
//         <label htmlFor="opp_type">Opportunity Type</label>
//         <input type="text" id="opp_type" onChange={handleChange} />
//       </div>

//       <button type="submit" onClick={handleSubmit}>
//         Create Opportunity
//       </button>
//     </form>
//   );
// }

// export default NewOpportunityForm;

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
      <TitleText title="Create an Opportunity" />
      <TextInput
        id="title"
        type="text"
        label="Opportunity Title"
        placeholder="Give your Opportunity a welcoming name!"
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
