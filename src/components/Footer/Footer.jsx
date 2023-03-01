import React from "react";
import styles from "./Footer.module.scss";
import { FcLike } from "react-icons/fc";

export default function Footer() {
  const tim = new Date();
  const yar = tim.getFullYear();
  return (
    <div className={styles.footer} id="footer">
      <div className="footerBg"></div>
      <footer className="boxx">
        <div className="footer-logo">
          <a href="#home">
            <img src="./img/logo.png" alt="My Logo" className="logo" />
          </a>
        </div>
        <div className="footer-link">
          <span>
            <strong>
              &copy;
              <span className="year">{yar}</span>
            </strong>
            All rights reserved
          </span>
          <small className="madith">
            made with
            <div className="icons">
              <FcLike />
            </div>
            by
            <a href="https://github.com/Kress2000" className="link">
              Nsanzimfura Eric
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}
