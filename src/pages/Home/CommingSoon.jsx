import React from 'react';
import cover1 from "../../img/home/cover-1-1024x773.png"

const CommingSoon = (props) => {
    return (
        <div className='commingSoon'>
            <div className="commingSoon__cover">
                <div className="commingSoon__layer">
            <img src={cover1} alt="cover" />
            <div className="title">
                <h1><span>Our App</span> is Comming Soon</h1>
            </div>
            <div className="commingSoon__content">We are strill Working on it</div>
            </div>
            <div className="commingSoon__overlays"></div>

            </div>
        </div>
    );
};

export default CommingSoon;