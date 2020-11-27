import React, { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
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

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
        window.location.reload(true);
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/");
    window.location.reload(true);
  };

  return (
    <div>
      <form>
        <div>
          <h2>You are welcome!</h2>
          <h2>Please login to continue</h2>
        </div>

        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="loggin-button">
          <button onClick={handleCancel}>Cancel</button>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>

        <div className="redirect-link">
          <Link to={`/register`}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
