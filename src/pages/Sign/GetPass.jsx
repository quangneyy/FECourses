import { send } from '@emailjs/browser';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getCode } from '../../redux/action/GetCode';
import { actionTypes } from '../../redux/action/types';
import * as yup from "yup"

const GetPass = (props) => {
    const schema = yup.object().shape({
        mail: yup.string().email("Email sai định dạng")
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ref = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()       
        if(!ref.current.value) {
            alert("Vui lòng nhập email")
        }
        else {   
            schema.isValid({mail: ref.current.value})
            .then(res => {
                if(!res) {
                    alert("Vui lòng nhập đúng định dạng email")
                }
                else {
                    dispatch(getCode(ref.current.value, () => {
                        navigate("/entercode")}))
                }
            })  
       
    }

    }
    return (
        <div className='sign'>
            <div className="sign__cover">
                <h2>Forgot Password</h2>
                <p style={{marginTop: ".5rem", color: "#757575"}}>Lost your password? Please enter your email address.</p>
                <form>
                    <div className="input">
                    <input type="email" name="mail" ref={ref} placeholder='Nhập email của bạn'></input>
                    </div>
                    <div className="login">
                        <button onClick={handleSubmit}  className="btn-login">Submit</button>
                        </div>
                        <div className="signin_q" style={{marginTop: "1.5rem"}}>
                        <NavLink to="/signin">Sign In</NavLink>
              </div>
                </form>
             
                </div>
        </div>
    );
};

export default GetPass;