import React from "react";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <div id={styles.experience}>
      <h1 className="pageTitle">My Experiences</h1>
        <div className="animate"></div>
      <div className="exp-box exp1">
        <div className="info">
          <p>
            Deployed scalable travel, event and telemedicine web and hybrid
            mobile apps using React SPA and PWA. Collaborated in 140+ projects
            with 50+ clients all around the world. I am also interested in data
            analytics and visualization.
          </p>
        </div>
        <div className="projectBox">
          <div className="show-project">
            <img src="./img/arrowToPhone.png" alt="Arrow to phone" />
            <div>
              <span>Featured Project</span>
              <span>Tryotel App</span>
            </div>
            <button className="btn btnShowProject" id="btnShowProject">
              <a href="https://www.github.com/Kress2000/nsanzimfura">
                View Project
              </a>
            </button>
          </div>
          <div className="phoneRotate">
            <img src="./img/phone.png" alt="Rotating phone" />
          </div>
        </div>
      </div>
      <div className="exp-box exp2">
        <h2>Other projects</h2>
        <div className="bigBoxOtherProj">
          <div className="otherProjectsBox">
            <div className="nobg" id="xx">
              <h4>Upstatement</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button className="Demo btn">
                <a href="https://github.com/kress2000">Demo project</a>
              </button>
            </div>
            <div className="bg engineer" id="xx">
              <h4>UI Engineer at Appie</h4>
              <p> Necessitatibus, Lorem, ipsum dolor. Labore sint?</p>
              <button className="Demo btn">
                <a href="https://github.com/kress2000">Demo project</a>
              </button>
            </div>
          </div>
          <div className="otherProjectsBox">
            <div className="bg studio " id="xx">
              <h4> Studio Developer</h4>
              <p>
                {" "}
                Sequi expedita inventore eos aliquid voluptatibus non doloribus!
              </p>
              <button className="Demo btn">
                <a href="https://github.com/kress2000">Demo project</a>
              </button>
            </div>
            <div className="nobg" id="xx">
              <h4>Downstatement</h4>
              <p> Ipsa fugiat quisquam ipsam vero minima voluptate! optio!.</p>
              <button className="Demo btn">
                <a href="https://github.com/kress2000">Demo project</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
