import "./Navbar.css";
import { useState } from "react";
import '../styles/global.css'

const JSNavbar = (props) => {
    const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <>
      <nav id="nav">
        <p id="logo">LOGO</p>
        <div className="links-wrapper">
          <a className="link" href="/">
            Home
          </a>
          <a className="link" href="/about">
            About
          </a>
          <a className="link" href="/blog">
            Blog
          </a>
          
        </div>
        <button id="icon-wrapper" onClick={() => {setMenuVisibility(!menuVisibility);} }>
          {props.icon}
        </button>
      </nav>
      {menuVisibility && (<div id="mobile-menu" >
       <nav id="mobile-links">
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href="/about">
          About
        </a>
        <a className="link" href="/blog">
          Blog
        </a>
        <button id="close-menu-button" onClick={() => setMenuVisibility(!menuVisibility)}>Close menu</button>
        </nav> 
      </div>)}
    </>
  );
};

export default JSNavbar;
