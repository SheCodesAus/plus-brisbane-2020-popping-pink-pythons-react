import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import SplashPage from "./pages/SplashPage";
import FeedPage from "./pages/FeedPage";
import RegisterUserPage from "./pages/RegisterPage";
import NewOpportunityPage from "./pages/NewOpportunityPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
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

          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
