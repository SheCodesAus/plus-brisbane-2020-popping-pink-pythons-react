import React, { useEffect } from "react";
import Logo from "../images/logo-transparent.png";

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
          <div className="logo">
          <img src={Logo} alt="logo" className="Logo"/>
          </div>
  
      </header>
    )
  };
  
  export default Navbar;