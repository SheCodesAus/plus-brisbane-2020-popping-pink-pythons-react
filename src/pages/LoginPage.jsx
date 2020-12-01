import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Header from "../components/Header/Header";

function LoginPage() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <LoginForm />
    </div>
    
  )
}

export default LoginPage;
