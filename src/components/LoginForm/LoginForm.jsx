import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import TextInput from "../../components/TextInput/TextInput";
import ButtonForms from "../../components/Button/ButtonForms";
import TittleText from "../../components/TitleText/TitleText";

function LoginForm() {
  //variables
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  //method
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
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        console.log(response);
        if (response.token) {
          window.localStorage.setItem("username", credentials.username);
          window.localStorage.setItem("token", response.token);
          window.localStorage.setItem("isAuthenticated", "True");
          history.push("/opportunity");
        } else alert("Incorrect username or password");
      });
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
        // error={errorMessages.username}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="xxxxxxxx"
        onChange={handleChange}
        // onKeyPress={handleKeyPress}
        // error={errorMessages.password}
      />
      <ButtonForms value="Login" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default LoginForm;
