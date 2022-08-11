import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Components/Card/Card';
import { head } from '../../redux/action/Api';
import { getListCourses } from '../../redux/action/GetListCourses';
import { getSaved } from '../../redux/action/GetSaved';

const Saved = (props) => {
    const dispatch = useDispatch()
    const [arrSaved, setArrSaved] = useState([])
    const {arrCourses} = useSelector(state => state.CoursesReducer)
    const {infor} = useSelector(state => state.UserReducer)
    const {listSaved} = useSelector(state => state.SavedReducer)
    const arr = arrCourses.filter(item => {
        if(listSaved.find(item2 => item2.coursesNumber == item.id))
        return item
    })
    
useEffect(() => {
    dispatch(getSaved())
    dispatch(getListCourses())
}, [])

    return (
        <div className='saved'>
            <div className="saved__cover">
        <div className="title">
            <h1>
            Your saved <span>Courses.</span>
            </h1>
          </div>
          <div className="saved__content" style={{display: "grid", gridTemplateColumns: "auto auto auto", gridGap: 30, marginTop: "1.5rem"}}>
            {arr.map((item, index) => {
                return <Card check={'check'} item={item} key={index}/>
            })}
           
          </div>
          </div>
        </div>
    );
};

export default Saved;