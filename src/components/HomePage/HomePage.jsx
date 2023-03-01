import React from 'react';
import styles from "./HomePage.module.scss";
import {BsArrowDown} from 'react-icons/bs'


export default function HomePage() {
    const target = "_blank"
  return (
    <div className={styles.home} id="home">
                <div className="homepage-boxes box">
                    <img src="./img/squaresHome.svg" alt="Squares" className="square-boxes" />
                    <div className="glowing-box">
                        <div className="box-shadow-glowing">
                            <img src="./img/glowing.gif" alt=" Glowing bulb" className="glowing" />
                        </div>
                    </div>
                </div>
                <div className="homepage-middle box">
                    <h1>NSANZIMFURA ERIC</h1>
                    <p>Software Engineer, Web Designer & Front End Developer</p>
                </div>
                <div className="homepage-bottom box">
                    <div className='bgg'></div>
                    <img src="./img/oblique shapes.svg" alt="oblique Shapes"  className='Shapes'/>
                    <div className="resume-box">
                        <div className="circle">
                            <BsArrowDown  className='arro'/>
                        </div>
                        <a href="https://kress2000.github.io/CV-Nsanzimfura/" target={target} >Resume</a>
                    </div>
                </div>
    </div>
  )
}
