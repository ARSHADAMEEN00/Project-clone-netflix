import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [state, setstate] = useState(false)
  useEffect(() => {
  window.addEventListener("scroll" , ()=>{
    if(window.scrollY>100){
      setstate(true)
    }
    return()=>{
      window.removeEventListener("scroll")
    }
  })
  }, [])
  return (
    <div className={`navbar ${state && "nav_black"}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
      />
      <div className="forms">
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar"
        />
      </div>
    </div>
    
  );
}

export default NavBar;



