import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import TextInput from "../../components/TextInput/TextInput";
import ButtonForms from "../../components/Button/ButtonForms";
import TittleText from "../../components/TitleText/TitleText";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessages, setErrors] = useState({
    username: "",
    password: "",
  });

  const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );

  const validateInput = () => {
    let errors = { ...errorMessages };

    errors.username = validEmailRegex.test(credentials.username)
      ? ""
      : "Enter a valid username!";

    errors.password =
      credentials.password.length < 8
        ? "Password needs to be 8 characters or longer"
        : "";

    return errors;
  };

  const validateForm = () => {
    const errors = validateInput();
    const firstValidationError = Object.values(errors).find(
      (error) => error.length > 0
    );
    setErrors(errors);
    return firstValidationError == undefined;
  };

  const history = useHistory();

  //Methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("userID", response.user_id);
        window.localStorage.setItem("is_owner", response.is_owner);
        if (response.token != null) {
          history.push("/");
        } else {
          let errors = { ...errorMessages };
          errors.username = response.non_field_errors;
          errors.password = response.non_field_errors;
          setErrors(errors);
        }
      });
    }
  };

  const handleKeyPress = (e) => {
    //triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  //Template
  return (
    <div className="login-form">
      <TittleText title="Login" />
      <TextInput
        id="username"
        type="username"
        label="Username"
        placeholder="Enter your username"
        onChange={handleChange}
        error={errorMessages.username}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="xxxxxxxx"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        error={errorMessages.password}
      />
      <ButtonForms value="Login" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default LoginForm;
