import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/nav/Nav";
import SplashPage from './pages/SplashPage';
import './App.css';

function App() {

  return (
    
    <Router>

        <div id="header-nav">
            <Nav />
        </div>

        <div>
        <Switch>
            <Route path="/">
                <SplashPage />
            </Route>    
        
        </Switch>
      </div>


    </Router>
  );
}

export default App;
