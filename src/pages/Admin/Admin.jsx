import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPageUser } from '../../redux/action/GetPageUser';
import ListCourses from './ManageCourses';
import ListUsers from './ListUsers';
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Admin = (props) => {
    const navigate = useNavigate()
    const {groupId} = useSelector(state => state.UserReducer)

    const [check, setCheck] = useState("user")
    const handleClick = (name) => {
        setCheck(name)
    }
    useEffect(() => {
        if(groupId !== 2) {
            navigate("/")
        }
    }, [groupId])
    return (
        <div className='admin'>
        <div className="admin__cover">
            <div className="title">
                <h1><span>Admin</span> Page</h1>
            </div>
                <div className="admin__navbar">
                    <ul>
                        <li onClick={() => {
                            handleClick("user")
                        }}
                        className={`${check === "user" && "active" }`}
                        >Quản lý người dùng</li>
                        <li onClick={() => {
                            handleClick("course")
                        }}
                        className={`${check === "course" && "active" }`}
                        >Quản lý khoá học</li>
                    </ul>
            </div>
            <div className="admin__content">
                    {check === "user" ? <ListUsers/> : <ListCourses/>}
                </div>
        </div>
        </div>
    );
};

export default Admin;