import React from "react";
import Logo from "../images/Logo.jpg";
import "./Header.css"

function Header(){
    return(
        <nav className="header">
            <img src={Logo} alt="logo" className="Logo"/>
        </nav>
    );
}

export default Header;