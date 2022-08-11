import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";
import PlayButton from "../../Components/Button/PlayButton";
import Card from "../../Components/Card/Card";
import { getListCourses } from "../../redux/action/GetListCourses";

const Quality = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListCourses())
    }, [])

  const {arrCourses} = useSelector(state => state.CoursesReducer)
  const parallax2 = useParallax({
    speed: 10
  })
  const arrCopy = arrCourses.map((item, index) => {
    return item
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
               {arrCopy.map((item, index) => {
                if(index <= 5)
                 return <Card item={item} key={index}></Card>
               })}
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
