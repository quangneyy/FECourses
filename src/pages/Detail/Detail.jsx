import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import Lesson from '../../Components/Lesson/Lesson';
import { useHistory, useNavigate } from 'react-router';

import video from '../../Video/kimetsu.mp4'
import { useSelector } from 'react-redux';
const Detail = (props) => {
    const navigate = useNavigate()
    const check = useSelector(state => state.UserReducer.check)
    useEffect(() => {
        if(check !== 0) {
            alert("Vui long dang nhap vao tai khoan!!!")
            navigate("/signin")
            console.log(check)
        }
    }, [])
 
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
            </div>
            <div className="commemt">
                <input type="text" placeholder='Write a comment' />
            </div>
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

            </div>

        </div>
    );
};

export default Detail;