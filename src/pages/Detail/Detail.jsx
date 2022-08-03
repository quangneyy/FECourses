import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Lesson from '../../Components/Lesson/Lesson';
import { useHistory, useNavigate } from 'react-router';
import {AiTwotoneStar} from "react-icons/ai"
import { useSelector } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import Comment from './Comment';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Detail = (props) => {
    const handleChange = (newRating) => {
        console.log(newRating)
    }
  
    const navigate = useNavigate()
    const check = useSelector(state => state.UserReducer.check)
    /* useEffect(() => {
        if(check !== 0) {
            alert("Vui long dang nhap vao tai khoan!!!")
            navigate("/signin")
            console.log(check)
        }
    }, []) */
 
    const src = 'https://hd.1080phim.com/20220729/26193_a0876f48/index.m3u8'

    return (
        <div className='detail'>
            <div className="detail__cover">
        <div className="detail__left">
            <div className="video">
            <ReactPlayer 
            width="100%"
            height="100%"
            controls={true}
            url={src}
      />
            <div className="video__title">
                    <h2>Introduction Design Graphic</h2>
                </div>
                <ReactStars value={3} count={5} size={20} onChange={handleChange}/>
            </div>
            
          {window.innerWidth > 750 &&  <Comment/>}
        </div>
        <div className="detail__right">
            <div className="detail__right__lessons">
               <ul>
                <li><Lesson/> </li>
                <li><Lesson/> </li>
                <li><Lesson/> </li>
                <li><Lesson/> </li>
                <li><Lesson/> </li>
                <li><Lesson/> </li>
                <li><Lesson/> </li>
                <li><Lesson/> </li>                
               </ul>
            </div>
        </div>
        {window.innerWidth <= 750 && <Comment/>}

            </div>

        </div>
    );
};

export default Detail;