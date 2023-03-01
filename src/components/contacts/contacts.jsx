import React from "react";
import styles from "./contacts.module.scss";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";

export default function Contacts() {
  const findmhr = [
    {
      href: "https://github.com/kress2000",
      target: "_blank",
      icon: <BsGithub />,
    },
    {
      href: "https://www.linkedin.com/in/nsanzimfura-eric-230708223/",
      target: "_blank",
      icon: <FiLinkedin />,
    },
    {
      href: "https://github.com/kress2000/mybrand-react",
      target: "_blank",
      icon: <BsInstagram />,
    },
    {
      href: "https://api.whatsapp.com/send?phone=+250780088171",
      target: "_blank",
      icon: <BsWhatsapp />,
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=erickykress1@gmail.com",
      target: "_blank",
      icon: <GrMail />,
    },
    {
      href: "https://www.figma.com/files/drafts?fuid=1090340226629167281",
      target: "_blank",
      icon: <FaFigma />,
    },
  ];

  return (
    <div className={styles.contacts} id="contacts">
      <h1 className="pageTitle">Get In Touch</h1>
      <div className="contact-box">
        <div className="contact-card  greetings">
          <span>
            Although I might not be able to know that you have visited me here,
            <strong>a visitor needs a sip for sure!</strong>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </span>
          <div className="sayHello">
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkjPmHgrWvtxdRjhmRVGFMjZgZxZsRHtMpCmvFtsGWpVgFqgrbjHHxXDFFQfhLcXltPlg"
            >
              Say hello
            </a>
          </div>
          <div className="about-medias">
            <ul>
              {findmhr.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target={link.target}>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="contact-card sent-mails">
          <div
            className="mapouter"
            style={{
              position: "relative",
              textAlign: "right",
              height: "500px",
              width: "600px",
            }}
          >
            <div
              className="gmap_canvas"
              style={{
                overflow: "hidden",
                background: "none !important",
                height: "500px",
                width: "600px",
              }}
            >
              <iframe
                title="X"
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=00000%20kigali,%20nyarugenge,%20biryogo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://123movies-to.org">123movies</a>
              <br />
              <a href="https://www.embedgooglemap.net">
                using google maps on websites
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="way-to-footer"></div>
    </div>
  );
}
