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
      <h1 class="pageTitle">Get In Touch</h1>
      <div class="contact-box">
        <div class="contact-card  greetings">
          <span>
            Although I might not be able to know that you have visited me here,{" "}
            <strong>a visitor needs a sip for sure!</strong>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </span>
          <div class="sayHello">
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkjPmHgrWvtxdRjhmRVGFMjZgZxZsRHtMpCmvFtsGWpVgFqgrbjHHxXDFFQfhLcXltPlg"
            >
              Say hello
            </a>
          </div>
          <div class="about-medias">
            <ul>
              {findmhr.map((link) => (
                <li key={link.icon}>
                  <a href={link.href} target={link.target}>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="contact-card sent-mails">
          <div
            class="mapouter"
            style={{
              position: "relative",
              textAlign: "right",
              height: "500px",
              width: "600px",
            }}
          >
            <div
              class="gmap_canvas"
              style={{
                overflow: "hidden",
                background: "none !important",
                height: "500px",
                width: "600px",
              }}
            >
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=00000%20kigali,%20nyarugenge,%20biryogo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
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
      <div class="way-to-footer"></div>
    </div>
  );
}
