import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import cover3 from "../../img/cover-3.png"
import {FaSearch} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { getListCourses } from "../../redux/action/GetListCourses";
import Search from "../../Components/Search/Search.jsx"
const Course = (props) => {
  const {arrCourses} = useSelector(state => state.CoursesReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListCourses())
    }, []) 
  const {openSearch, searchList} = useSelector(state => state.ListUser)

  return (
    <div className="courses">
      <div className="courses__cover">
        <div className="courses__intro">
          <div className="intro__overlays"></div>
          <div className="courses__title__left">
            <div className="title">
              <h1>
                All <span>Courses</span>.
              </h1>
              <p>
                <NavLink to="/">HOME</NavLink> / ALL COURSES
              </p>
            </div>
          </div>
          <div className="courses__title__right">
            <img src={cover3} alt="" />
          </div>
        </div>
        <div className="title"><h1>Improve <span>Knowledge</span>
            <br/>with the Best Courses.</h1></div>
        <div className="courses__content">
          <div className="courses__content__cover">
            <div className="courses__left">
              <div className="courses__left__cover">
               
                <h3>Product categories</h3>
                <ul>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Photography</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Web Developemnt</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="courses__right">
                <Search arr={arrCourses} targetSearch={"name"}/>
              <div className="list__courses">
                {!openSearch ? arrCourses.map((item, index) => {
                  return (
                <Card item={item} key={index} />
                  )
                }) : searchList.map((item, index) => {
                  return (
                    <Card item={item} key={index}/>
                  )
                })

                }
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
