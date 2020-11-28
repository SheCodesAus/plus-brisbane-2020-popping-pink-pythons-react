import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RegisterUserForm.css";

function RegisterUserForm() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    bio: "",
    image: "",
    opportunity_owner: "",
  });

  const history = useHistory();

  const handleUserChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value,
    }));
    console.log(value);
  };

  const postUserData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (
      userData.username &&
      userData.email &&
      userData.password &&
      userData.name &&
      userData.opportunity_owner
    ) {
      postUserData().then((response) => {
        console.log(response);
        history.push("/opportunity");
      });
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" onChange={handleUserChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={handleUserChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="Password" onChange={handleUserChange} />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="Name" onChange={handleUserChange} />
      </div>
      <div>
        <label htmlFor="owner">is Opportunity Owner?</label>
        <input
          type="checkbox"
          value="True"
          id="owner"
          onChange={handleUserChange}
        />
      </div>

      <button type="submit" onClick={handleUserSubmit}>
        Register
      </button>
    </form>
  );
}

export default RegisterUserForm;
