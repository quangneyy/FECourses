import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import cover3 from "../../img/cover-3.png"
import {FaSearch} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { getListCourses } from "../../redux/action/GetListCourses";
import Search from "../../Components/Search/Search.jsx"
import { getCategory } from "../../redux/action/GetCategory";
const Course = (props) => {
  const {arrCourses} = useSelector(state => state.CoursesReducer)
  const {openSearch, searchList} = useSelector(state => state.ListUser)
  const {listCategory} = useSelector(state => state.CategoryReducer)
  const [arrCourses2, setarrCourses2] = useState([])
  const [chekcFill, setCheckFill] = useState(false)

  const handleClick = (item) => {
    setCheckFill(true)

    const arr = arrCourses.filter(item => item.Category !== null)
    const arr2 = arr.filter(item2 =>  item2.Category.id === item.id)
    setarrCourses2(arr2)
    console.log(arr2)

  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListCourses())
    dispatch(getCategory())
    }, []) 

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
                  <li onClick={() => {
                    setCheckFill(false)
                  }}><div style={{cursor: "pointer"}}>All</div></li>
                  {listCategory.map((item, index) => {
                    return <li key={index} onClick={() => {
                      handleClick(item)
                    }}>
                    <div style={{cursor: "pointer"}}>{item.name}</div>
                  </li>
                  })}
                
                </ul>
              </div>
            </div>
            <div className="courses__right">
                <Search arr={arrCourses} targetSearch={"name"}/>
              <div className="list__courses">
                { chekcFill ? arrCourses2.map((x, index)=> {
                  return <Card item={x} key={index} />
                }) : !openSearch ? arrCourses.map((item, index) => {
                  return (
                <Card item={item} key={index} />
                  )
                }) : searchList.map((item, index) => {
                  return (
                    <Card item={item} key={index}/>
                  )
                } )
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
