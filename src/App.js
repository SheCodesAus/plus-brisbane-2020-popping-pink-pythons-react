import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SplashPage from "./pages/SplashPage";
import FeedPage from "./pages/FeedPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import NewOpportunityPage from "./pages/NewOpportunityPage";
import OpportunityPage from "./pages/OpportunityPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/opportunity">
          <FeedPage />
        </Route>

        <Route path="/opportunity/${id}">
          <OpportunityPage />
        </Route>

        <Route path="/register">
          <RegisterUserPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/NewOpportunity">
          <NewOpportunityPage />
        </Route>

        <Route path="/">
          <SplashPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
