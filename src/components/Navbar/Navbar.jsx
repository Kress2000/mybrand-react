import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { FaTimes } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export default function Navbar({ clickdBody }) {
  const [activ, setActiv] = useState("01");
  const [togglSmallNav, settogglSmallNav] = useState(false);
  
  const navbarLinks = [
    { number: "01", name: "// home", id:"home" },
    { number: "02", name: "// about", id:"about" },
    { number: "03", name: "// experience", id:"experience"},
    { number: "04", name: "// blogs", id:"blogs" },
    { number: "05", name: "// Contacts", id:"Contacts"},
    { number: "06", name: "// sign up", id:"signUp" },
  ];
  return (
    <div id={styles.navbar}>
      {!togglSmallNav && (
        <div className="small-nav" id="small-nav">
          <img src="./img/logo.png" alt="My Logo" className="logo" />
          <img
            src="./img/fa-bars.svg"
            alt="Humbaga btn"
            className="hambaga"
            id="hambaga"
            onClick={() => settogglSmallNav(true)}
          />
        </div>
      )}
      <nav className={togglSmallNav ? "nav-bar-box visibl" : "nav-bar-box"}>
        <div className="nav-logo-box">
          <a href="#01">
            <img src="./img/logo.png" alt="My Logo" className="logo" />
          </a>
          <div id="close-box">
            <FaTimes className="tims" onClick={() => settogglSmallNav(false)} />
          </div>
        </div>
        <ul className="nav-links">
          {navbarLinks.map((link, i) => (
            <li key={link.id} onClick={() => setActiv(link.number)}>
              <a
                href={link.id}
                id={link.number}
                className={activ === link.number ? "atag activ" : "atag"}
              >
                <small>{link.number}</small>
                <span> {link.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-footer">
          <div className="nav-footer-box">
            <div>
              <strong className="copy">
                &copy; <span className="year"></span>
              </strong>
              Made with <FcLike /> by
            </div>
            <a href="www.github.com/Kress2000" target="_blank">
              Nsanzimfura Eric
            </a>
            <span className="allrigghts">All rights reserved</span>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
}
