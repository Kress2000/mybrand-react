import React from 'react';
import styles from "./About.module.scss";
import {BsGithub} from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {FaFigma} from 'react-icons/fa'


export default function About() {
    const skills =[
        {name: "HTML", class: "html"},{name: "CSS3/SASS", class: "css"},
        {name: "Bootstrap", class: "bootstrap"},{name: "JavaScript (ES6+)", class: "js"},
        {name: "React", class: "react"},{name: "NodeJS", class: "node"},
        {name: "TypeScript", class: "ts"}
    ]
const findmhr =[
    {href: "https://github.com/kress2000", target: "_blank", icon: <BsGithub /> },
    {href: "https://www.linkedin.com/in/nsanzimfura-eric-230708223/", target: "_blank", icon: <FiLinkedin /> },
    {href: "https://github.com/kress2000/mybrand-react", target: "_blank", icon: <BsInstagram /> },
    {href: "https://api.whatsapp.com/send?phone=+250780088171", target: "_blank", icon: <BsWhatsapp /> },
    {href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=erickykress1@gmail.com", target: "_blank", icon: <GrMail /> },
    {href: "https://www.figma.com/files/drafts?fuid=1090340226629167281", target: "_blank", icon: <FaFigma /> }
]
  return (
    <div className={styles.about} id="about" >
        <div className="aboutbgmix"></div>
        <div className="about-header">
            <h1 className="pageTitle">ABOUT ME</h1>
            <p> NSANZIMFURA ERIC IS A WEB DEVELOPER AND DESIGNER</p>
            <p>LIVING AND WORKING IN RWANDA, KIGALI CITY</p>
            <div className="about-border"></div>
        </div>
        <div className="about-body">
            <div className="about-bg">
                <h2>Background</h2>
                <p>about
                    We are the ones who love creating the  things that live on the internet 😂.<br />
                    My interest in web development started back in 2021 when I decided to try editing custom Tumblr themes<br />
                        — turns out hacking together a custom reblog button taught me a lot about <strong>HTML & CSS!</strong> <br />
                    Fast-forward to today, My main focus these days is building accessible, inclusive products and digital 
                    experiences at Upstatement for a variety of clients.
                </p>
                <small>
                    I am the best eager learner, aad now I keep making new and trending technology staffs.<br />
                    I really believe in myself and my lovely clients who put thier trusts in me, and I never disappoint  
                    <i className="fa-regular fa-heart"></i>.
                </small>
            </div>
            <div className="about-medias">
                <ul>
                    {findmhr.map(link=>(
                    <li key={link.href}>
                        <a href={link.href} target={link.target}>
                            {link.icon}
                        </a>
                    </li>

                    ))}
                    
                </ul>
            </div>
            <div className="about-skills">
                <h2>Skills</h2>
                <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.<br />
                    Here are a few technologies I've been working with recently:
                </p>
                <div className="skills-list">
                    <h3>Web development</h3>
                    <ul>
                        {skills.map(skill=>(
                        <li key={skill.class}>
                            <span>{skill.name}</span>  
                            <div>
                                <span className={skill.class}></span>
                            </div>
                        </li>
                        ))}
                        
                    </ul>
                    <h3>Design:</h3>
                    <ul>
                        <li><span>Figma</span> 
                            <div>
                                <span className="figma"></span>
                            </div>
                        </li>
                        <li></li>
                    </ul>
                    <h3>Game development:</h3>
                    <ul>
                        <li><span>Blenda</span>
                                <div>
                                <span className="blenda"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
