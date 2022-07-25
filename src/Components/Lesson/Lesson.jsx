import React from 'react';

import img1 from "../../img/photo-1.jpg"

const Lesson = () => {
    return (
        <div className='lesson'>
            <div className="lesson__cover">
                <img src={img1} alt="cameo" />
                <h4>Introduction Design Graphic</h4>
            </div>
        </div>
    );
};

export default Lesson;