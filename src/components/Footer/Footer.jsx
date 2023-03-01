import React from "react";
import styles from "./Footer.module.scss";
import { FcLike } from "react-icons/fc";

export default function Footer() {
  const tim = new Date();
  const yar = tim.getFullYear();
  return (
    <div className={styles.footer} id="footer">
      <footer className="boxx">
        <div class="footer-logo">
          <img src="./img/logo.png" alt="My Logo" class="logo" />
        </div>
        <div class="footer-link">
          <span>
            <strong>
              &copy;
              <span class="year">{yar}</span>
            </strong>
            All rights reserved
          </span>
          <br />
          <small>
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
