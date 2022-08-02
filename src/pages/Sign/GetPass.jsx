import { send } from '@emailjs/browser';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../../redux/action/SendEmail';
import { actionTypes } from '../../redux/action/types';

const GetPass = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ref = useRef()
    const handleSubmit = (event) => {
    const code = (Math.floor(Math.random() * 50000) + 10000)
        dispatch({type: actionTypes.GET_CODE, payload: code})
        event.preventDefault()
        dispatch({type: actionTypes.LOADING})
        sendEmail(ref.current.value, () => {
            dispatch({type: actionTypes.LOADING})
            navigate("/entercode")
        }, code)
    }
    return (
        <div className='sign'>
            <div className="sign__cover">
                <h2>Forgot Password</h2>
                <p style={{marginTop: ".5rem", color: "#757575"}}>Lost your password? Please enter your email address.</p>
                <form>
                    <div className="input">
                    <input ref={ref} placeholder='Nhập email của bạn'></input>
                    </div>
                    <div className="login">
                        <button onClick={handleSubmit}  className="btn-login">Submit</button>
                        </div>
                </form>
                </div>
        </div>
    );
};

export default GetPass;