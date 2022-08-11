import React, { useRef } from 'react';
import Category from './Category';
import Courses from './Courses';
import Lesson from './Lesson';

const ListCourses = (props) => {
    const style = {
        height: 0, transition: "all .5s", overflow: "hidden"
    }

    const refCourses = useRef()
    const refLesson = useRef()
    const refCategory = useRef()
    return (
        <div>
                <h3 style={{cursor: "pointer"}} onClick={() => {
                if(refCourses.current.style.height === "0px") {
                    refCourses.current.style.height = "380px"
                }
                else {
                    refCourses.current.style.height = "0px"
                }
            }}>+ Add courses</h3>
            <div style={style} ref={refCourses}>
            < Courses/>
 
            </div>
            <h3 style={{cursor: "pointer", marginTop: 15}} onClick={() => {
                if(refLesson.current.style.height === "0px") {
                    refLesson.current.style.height = "300px"
                }
                else {
                    refLesson.current.style.height = "0px"
                }
            }}>+ Add lessons</h3>
            <div style={style} ref={refLesson} >
            <Lesson/>

            </div>
           
            <h3 style={{cursor: "pointer", marginTop: 15}} onClick={() => {
                if(refCategory.current.style.height === "0px") {
                    refCategory.current.style.height = "150px"
                }
                else {
                    refCategory.current.style.height = "0px"
                }
            }}>+ Add Category</h3>
            <div style={style} ref={refCategory} >
                <Category/>

            </div>
        </div>
    );
};

export default ListCourses;