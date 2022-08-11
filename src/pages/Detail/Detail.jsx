import React, { useEffect, useState } from "react";
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
const Detail = (props) => {
  const param = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [url, setUrl] = useState()
  const [img, setImg] = useState()

  const {infor} = useSelector((state) => state.UserReducer);

 


  const handleChange = (newRating) => {
    console.log(newRating);
  };
  const {listLessons} = useSelector(state => state.LessonsReducer)
  const {arrCourses} = useSelector(state => state.CoursesReducer)
  const x = arrCourses[0]
  useEffect(() => {
    if(listLessons.length !== 0) {
      setUrl(listLessons[0].video)
      console.log(listLessons)
    }

  }, [listLessons])

  useEffect(() => {
        /* if(!infor) {
            alert("Vui long dang nhap vao tai khoan!!!")
            navigate("/signin")
        } */
        dispatch(getListLessons(param))

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
    value: 3,
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

          {windowSize > 750 && <Comment />}
        </div>
        <div className="detail__right">
          <div className="detail__right__lessons">
            <ul>
              {listLessons.map((item, index) => {
                return <li onClick={() => {
                  setUrl(item.video)
                }} key={index}><Lesson img={x} item={item}/> </li>
                
              })}
              
            </ul>
          </div>
        </div>
        {windowSize <= 750 && <Comment />}
      </div>
    </div>
  );
};

export default Detail;
