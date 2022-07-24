import React from 'react';
import robot from "../../img/home/robot-1-1.png";
import star from "../../img/home/cover-2.png";
import { useParallax } from "react-scroll-parallax";

const Intro = (props) => {
  const parallax = useParallax({
    speed: 10,
  });
    return (
        <div className="intro">
        <div className="home-star">
          <img src={star} alt="star-img" />
        </div>
        <div className="intro__overlays"></div>
        <div className="intro__left">
          <div className="intro__platform">
            <div className="intro__platform__cover">
              <lord-icon
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="boomerang"
                colors="primary:#000000,secondary:#121331"
                style={{ width: 50, height: 50 }}
              ></lord-icon>
              <span>PLATFORM EDUCATION</span>
            </div>
          </div>
          <div className="title">
            <h1>
              Grow up your Skill by Online <span>Education.</span>
            </h1>
          </div>
          <div>
            <div>
            <form action="#">
                <input
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  className="start-course"
                ></input>
              <button type="submit">Start Course</button>
            </form>
            </div>
          </div>
        </div>
        <div className="intro__right">
          <div className="intro__right__img" ref={parallax.ref}>
            <img src={robot} alt="robot" />
          </div>
        </div>
      </div>
    );
};

export default Intro;