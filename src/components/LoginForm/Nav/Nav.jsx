import React, { useEffect, useState }  from "react"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import LoginControl from "../../helpers/Login"
import "./Nav.css"

function Nav() {
    //variables
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [profile, setProfile] = useState("/")

    useEffect(() => {
        let username = window.localStorage.getItem("username")
        setProfile("/users/" + username + "/")
        if (username) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }

    }, [location]);


    // if (username) {
        return (
            <nav id="nav-bar">
                <div className="nav">
                        {!isLoggedIn && <Link to="/opportunity"><div className="nav-link">Opportunities</div></Link>}
                        {!isLoggedIn && <Link to="/register"><div className="nav-link">Sign up</div></Link>}
                        {isLoggedIn && <Link to="/newopportunity/"><div className="nav-link">Create an Opportunity</div></Link>}
                        {isLoggedIn && <Link to={profile}><div className="nav-link">My Profile</div></Link>}
                        <div className="nav-link"><LoginControl /></div>
                </div>
            </nav>
        )
}


export default Nav;