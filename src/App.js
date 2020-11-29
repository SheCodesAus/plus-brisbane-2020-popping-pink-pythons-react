import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SplashPage from "./pages/SplashPage";
import FeedPage from "./pages/FeedPage";
import RegisterUserPage from "./pages/RegisterPage";
import NewOpportunityPage from "./pages/NewOpportunityPage";
import UserPage from "./pages/UserPage";
import UserUpdatePage from "./pages/UserUpdatePage";
import "./App.css";

function App() {
  return (
    <Router>

        <Switch>
          <Route path="/opportunity">
            <FeedPage />
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


          <Route exact path="/users/:username">
            <UserPage />
          </Route>

          <Route path="/users/:username/edit">
            <UserUpdatePage />
          </Route>

          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
