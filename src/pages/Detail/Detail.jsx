import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Lesson from "../../Components/Lesson/Lesson";
import { useHistory, useNavigate } from "react-router";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Comment from "./Comment";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import axios from "axios";
import {head} from "../../redux/action/Api"
import { getListCourses } from "../../redux/action/GetListCourses";
import { getListLessons } from "../../redux/action/GetListLesson";
import { getComment } from "../../redux/action/GetComment";
const Detail = (props) => {
  const param = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [url, setUrl] = useState()
  const [numberStar, setNumberStar] = useState()
  const [arrLessons, setArrLessons] = useState([])

  const {infor} = useSelector((state) => state.UserReducer);

  const handleChange = (newRating) => {
    setNumberStar(newRating)

  };
  const {listLessons} = useSelector(state => state.LessonsReducer)

  const {arrCourses} = useSelector(state => state.CoursesReducer)
  const x = arrCourses[0]

  useEffect(() => {
    const arr = listLessons.filter(item => item.Course.id == param.id)
    if(arrLessons.length !== 0) {
      setUrl(arrLessons[0].video)
      console.log(arrLessons)
    }
      setArrLessons(arr)
      console.log(url)
      
  }, [listLessons])
  console.log(listLessons)

  useEffect(() => {
        /* if(!infor) {
            alert("Vui long dang nhap vao tai khoan!!!")
            navigate("/signin")
        } */
        dispatch(getListLessons(param))
        dispatch(getComment())
        
    }, [])

    const [windowSize, setWindowSize] = useState(window.innerWidth)
  useEffect(() => {
    function resizewindow () {
        setWindowSize(window.innerWidth)
    }
    window.addEventListener("resize", resizewindow)
  })

    const src = `${url}`;
    const secondExample = {
    size: 17,
    count: 5,
    activeColor: "yellow",
    value: 0,
    a11y: true,
    emptyIcon: <i className="fa-solid fa-star"></i>,
    filledIcon: (
      <i style={{ color: "yellow" }} className="fa-solid fa-star"></i>
    ),
  };
  return (
    <div className="detail">
      <div className="detail__cover">
        <div className="detail__left">
          <div className="video">

            <ReactPlayer width="100%" height="100%" controls={true} url={src}/>

            <div className="video__title">
              <h2>Introduction Design Graphic</h2>
            </div>
            <div className="rating" style={{ marginTop: 10 }}>
              <ReactStars {...secondExample} onChange={handleChange} />
            </div>
          </div>

          {windowSize > 750 && <Comment idUser={infor.id} name={infor.username} idCourse={param.id} numberStar={numberStar} />}
        </div>
        <div className="detail__right">
          <div className="detail__right__lessons">
            <ul>
              {arrLessons.map((item, index) => {
                 return <li onClick={() => {
                  setUrl(item.video)
                }} key={index}><Lesson img={x} item={item}/></li>  
              })}
              
            </ul>
          </div>
        </div>
        {windowSize <= 750 && <Comment numberStar={numberStar} idCourse={param.id}/>}
      </div>
    </div>
  );
};

export default Detail;
