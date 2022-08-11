import React from 'react';

import img1 from "../../img/photo-1.jpg"

const Lesson = (props) => {
    return (
        <div className='lesson'>
            <div className="lesson__cover">
                <h4>{props.item.nameLesson}</h4>
            </div>
        </div>
    );
};

export default Lesson;