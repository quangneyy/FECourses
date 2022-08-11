import React, { useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import poster from "../../img/photo-3.jpg";

const Card = (props) => { 
  const navigate = useNavigate();
  const {infor} = useSelector(state => state.UserReducer)
  const handleSubmit = () => {
    if(!infor) {
    navigate('/signin')
    }
  }
  return (
    <div className="card" onClick={handleSubmit}>
      <NavLink  to={`/course/${props.item.id}`}>
        <div className="card__cover">
          <div className="card__top">
            <div className="card__img" style={{height: 200, position: "relative"}}>
              {/* <img src={props.item.image} alt="image-of-course" /> */}
              <div style={{background: `url(${props.item.image})  center center / cover`}}></div>
            </div>
          </div>
          <div className="card__bottom">
            <div className="card__title">
              <h2>{props.item.name}</h2>
            </div>
            <div className="card__evalute">
              Review (<span>4.5</span>) <GiRoundStar /> 
            </div>
            <div className="card__content">Economic | Graphic Design at...</div>

           
          </div>
        </div>
      </NavLink>
      <div onClick={() => {
              console.log("ok")
            }} className="card__price">+Favourite</div>
    </div>
  );
};

export default Card;
