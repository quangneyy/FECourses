import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../Components/Card/Card';

const Saved = (props) => {
    const {arrCourses} = useSelector(state => state.CoursesReducer)
    return (
        <div className='saved'>
            <div className="saved__cover">
        <div className="title">
            <h1>
            Your saved <span>Courses.</span>
            </h1>
          </div>
          <div className="saved__content" style={{display: "grid", gridTemplateColumn: "auto auto auto atuo", gridGap: 30, marginTop: "1.5rem"}}>
            {arrCourses.map((item, index) => {
                return <Card item={item} key={index}/>
            })}
           
          </div>
          </div>
        </div>
    );
};

export default Saved;