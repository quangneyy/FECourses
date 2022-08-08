import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Lesson from "../../Components/Lesson/Lesson";
import { useHistory, useNavigate } from "react-router";
import { AiTwotoneStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Comment from "./Comment";
import { FaStar } from "react-icons/fa";
const Detail = (props) => {
  const handleChange = (newRating) => {
    console.log(newRating);
  };
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  useEffect(() => {
    function resizewindow () {
        setWindowSize(window.innerWidth)
    }
    window.addEventListener("resize", resizewindow)
  })

  const navigate = useNavigate();
  const check = useSelector((state) => state.UserReducer.check);
  useEffect(() => {
        if(check !== 0) {
            alert("Vui long dang nhap vao tai khoan!!!")
            navigate("/signin")
        }
    }, [])

    const src = "https://firebasestorage.googleapis.com/v0/b/feisty-flames-358409.appspot.com/o/Video%2Fhtml-css%2FCa%CC%82%CC%81u%20tru%CC%81c%20file%20HTML.mp4?alt=media&token=20677748-49dc-4379-8375-0b81f2e3f874";
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
            <ReactPlayer width="100%" height="100%" controls={true} url={src} />
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
              <li>
                <Lesson />{" "}
              </li>
              <li>
                <Lesson />{" "}
              </li>
              <li>
                <Lesson />{" "}
              </li>
              <li>
                <Lesson />{" "}
              </li>
              <li>
                <Lesson />{" "}
              </li>
              <li>
                <Lesson />{" "}
              </li>
              <li>
                <Lesson />{" "}
              </li>
              <li>
                <Lesson />{" "}
              </li>
            </ul>
          </div>
        </div>
        {windowSize <= 750 && <Comment />}
      </div>
    </div>
  );
};

export default Detail;
