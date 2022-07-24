import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import poster from "../../img/photo-3.jpg";

const Card = (props) => {
    const id = 123
  return (
    <div className="card">
      <NavLink to={`/course/${id}`}>
        <div className="card__cover">
          <div className="card__top">
            <div className="card__img">
              <img src={poster} alt="image-of-course" />
            </div>
          </div>
          <div className="card__bottom">
            <div className="card__title">
              <h2>E-COMMERCE</h2>
            </div>
            <div className="card__evalute">
              Review (<span>4.5</span>) <GiRoundStar /> 
            </div>
            <div className="card__content">Economic | Graphic Design at...</div>

            <div className="card__price">Free</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
