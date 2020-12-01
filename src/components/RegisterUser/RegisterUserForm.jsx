import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonForms from "../../components/Button/ButtonForms";
import TextArea from "../../components/TextArea/TextArea";
import TextInput from "../../components/TextInput/TextInput";
import TitleText from "../../components/TitleText/TitleText";
import "./RegisterUserForm.css";

function RegisterUserForm() {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    bio: "",
    image: "https://i.pravatar.cc/300",
    opportunity_owner: "",
  });

  const [errorMessages, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    bio: "",
    image: "",
    opportunity_owner: "",
  });

  //Methods
  //Valid Email check
  const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );

  //check input
  const validateInput = () => {
    let errors = { ...errorMessages };

    errors.username =
      userDetails.username.length < 2
        ? "Given name must be 2 characters of longer!"
        : "";

    errors.email = validEmailRegex.test(userDetails.email)
      ? ""
      : "Enter a valid email address!";

    errors.password =
      userDetails.password.length < 8
        ? "Password must be 8 characters or longer"
        : "";

    errors.name =
      userDetails.name.length < 2
        ? "Given name must be 2 characters of longer!"
        : "";

    return errors;
  };

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

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        console.log(response);
        history.push("/login");
      });
    } else {
      console.log("invalid form");
    }
  };

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="signup-form">
      <TitleText title="Register" />
      <TextInput
        id="username"
        type="text"
        label="Username"
        placeholder="Preferred Username"
        onChange={handleChange}
        error={errorMessages.username}
      />
      <TextInput
        id="email"
        type="text"
        label="Email"
        placeholder="Example: youarewelcome@wordofmouth.com"
        onChange={handleChange}
        error={errorMessages.email}
      />
      <TextInput
        id="password"
        type="text"
        label="Password"
        placeholder="Enter minimum 8 characters"
        onChange={handleChange}
        error={errorMessages.password}
      />
      <TextInput
        id="name"
        type="text"
        label="Name"
        placeholder="Enter your fullname"
        onChange={handleChange}
        error={errorMessages.name}
      />
      <TextInput
        id="bio"
        type="text"
        label="Bio"
        placeholder="Tell us a little about yourself!"
        onChange={handleChange}
      />
      <TextInput
        id="image"
        type="text"
        label="Image"
        placeholder="Enter a url to your profile image"
        onChange={handleChange}
      />
      <TextInput
        id="OpportunityOwner"
        label="Opportunity Owner"
        type="checkbox"
        value="True"
        onChange={handleChange}
      />
      <ButtonForms value="Register" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default RegisterUserForm;
