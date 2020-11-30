import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/logo-transparent.png";
import Nav from "../LoginForm/Nav/Nav";

  const Navbar=() => {
    const [scrolled,setScrolled]=React.useState(false);
  
    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    let x=['navbar'];
    if(scrolled){
      x.push('scrolled');
    }
    return (
      <header className={x.join(" ")}>
        <div className="navbar-flex">
          <div className="logo">
          <Link to={'/'}><img src={Logo} alt="logo" className="Logo" /></Link>
          </div>
          <div className="nav-flex">
            <Nav />
          </div>
      </div>
      </header>
    )
  };
  
  export default Navbar;