import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import './App.css';

function App() {

  return (
    
    <Router>
      
      <div>
        <Switch>
          <Route path='/'>
            <SplashPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;