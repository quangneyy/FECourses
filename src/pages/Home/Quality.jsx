import React from "react";
import { NavLink } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";
import PlayButton from "../../Components/Button/PlayButton";
import Card from "../../Components/Card/Card";

const Quality = (props) => {
  const parallax2 = useParallax({
    speed: 10
  })
  
  return (
    <div className="quality">
      <div ref={parallax2.ref} className="title">
        <h1>
          Hight <span>Quality</span> <br/> Video Audio &amp; Live Clasess.
        </h1>
      </div>
      <div className="quality__content">
            <div className="quality__card">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
      </div>
      <div className="quality__button">
        <NavLink to="/courses">
        <button>
          Start Learning
        </button>
        <PlayButton/>
          </NavLink>
      </div>
    </div>
  );
};

export default Quality;
