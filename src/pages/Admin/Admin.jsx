import React, { Fragment, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPageUser } from '../../redux/action/GetPageUser';
import ListCourses from './ManageCourses';
import ListUsers from './ListUsers';

const Admin = (props) => {
  
    const [check, setCheck] = useState("user")
    const handleClick = (name) => {
        setCheck(name)
    }
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