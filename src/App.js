import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import OpportunityPage from "./pages/OpportunityPage";
import SplashPage from './pages/SplashPage';
import FeedPage from './pages/FeedPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {

  return (
    
    <Router>

        <div>
            <Header />
        </div>

        <div id="header-nav">
            <Nav />
        </div>

        <div>
        <Switch>

        <Route path="/opportunity">
            <FeedPage />
        </Route>

        <Route path="/opportunity/:id">
            <OpportunityPage />
        </Route>

        <Route path="/login">
            <LoginPage />
        </Route>
          
        <Route path="/register">
            <RegisterPage />
        </Route>

        <Route path='/'>
          <SplashPage />
        </Route>    
        
        </Switch>
      </div>


    </Router>
  );
}

export default App;
