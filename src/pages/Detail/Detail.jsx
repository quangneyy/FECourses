import React from 'react';
import ReactPlayer from 'react-player';
import Lesson from '../../Components/Lesson/Lesson';
import video from '../../Video/kimetsu.mp4'
const Detail = () => {
    return (
        <div className='detail'>
            <div className="detail__cover">
        <div className="detail__left">
            <div className="video">
               
            <video controls>
                <source src={video}  type="video/mp4"></source>
            </video>
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