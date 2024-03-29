import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SplashPage from "./pages/SplashPage";
import FeedPage from "./pages/FeedPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import NewOpportunityPage from "./pages/NewOpportunityPage";
import OpportunityPage from "./pages/OpportunityPage";
import UserPage from "./pages/UserPage";
import UserUpdatePage from "./pages/UserUpdatePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/opportunity/:id">
            <OpportunityPage />
          </Route>

          <Route path="/opportunity">
            <FeedPage />
          </Route>

          <Route path="/NewOpportunity">
            <NewOpportunityPage />
          </Route>

          <Route path="/register">
            <RegisterUserPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/newopportunity">
            <NewOpportunityPage />
          </Route>

          <Route path="/users/:username">
            <UserPage />
          </Route>

          <Route path="/users/:username/edit">
            <UserUpdatePage />
          </Route>

          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
