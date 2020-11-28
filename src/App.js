import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import SplashPage from './pages/SplashPage';
import FeedPage from './pages/FeedPage';
import UserPage from './pages/UserPage';
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

        <Route path="/login">
            <LoginPage />
        </Route>
          
        <Route path="/register">
            <RegisterPage />
        </Route>

        <Route path="/users/:id">
            <UserPage />
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
