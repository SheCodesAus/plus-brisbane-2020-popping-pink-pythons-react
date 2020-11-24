import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import LoginPage from "./pages/LoginPage";
import SplashPage from './pages/SplashPage';
import FeedPage from './pages/FeedPage';
import './App.css';

function App() {

  return (
    
    <Router>

        <div id="header-nav">
            <Nav />
        </div>

        <div>
        <Switch>

        {/* <Route path="/opportunity">
            <FeedPage />
        </Route> */}

        <Route path="/login">
            <LoginPage />
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
