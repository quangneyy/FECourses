import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { signUp } from '../../redux/action/SignUp';

const SignUp = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (values) => {
        const {email, phone, username, password } = values
        dispatch(signUp({email, phone, username, password}, () => {
            navigate("/signin")
        }))        
    }
    const validate = yup.object().shape({
        password: yup.string().required('Vui lòng nhập mật khẩu!').min(6, 'Mật khẩu phải có ít nhất 6 ký tự').max(12, 'Mật khẩu không được quá 12 ký tự').matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g,
           'Mật khẩu phải có ít nhất một chữ hoa, một chữ thường và một số.'),
        username: yup.string().required("Vui lòng nhập họ tên!"),
        phone: yup.string().required("Số điện thoại không được để trống"),
        email: yup.string().required('Email không được để trống').email('Email không đúng định dạng!'),
        confirmPass: yup.string().required("Vui lòng nhập lại mật khẩu!").oneOf([yup.ref("password")], "Mật khẩu không khớp!")
    })
  
    return (
       <Formik
       onSubmit={handleSubmit}

        validateOnChange={false}
        validationSchema={validate}
        initialValues={{ 
            password: "",
            email: "",
            phone: "",
            username: "",
            confirmPass: ""
        }}
        
       >{formikProps => {
        return (
            <Form>
                <div className="input name">
                    <div>
                    <Field onChange={formikProps.handleChange} name="username" placeholder="Your Name" type="text"/>
                    <ErrorMessage name="username" render={mess => {
                return( <p className="error_mess">{mess}</p>)}} />
                    </div>
                    <div>
               <Field onChange={formikProps.handleChange} name="phone" type="text" placeholder="Phone Number" />
              
               <ErrorMessage name="phone" render={mess => {
               return( <p  className="error_mess">{mess}</p>)}} />
               </div>
                </div>
                <div className="input">
                    <Field onChange={formikProps.handleChange}  name="email" placeholder="Email" type="text"/>
                    <ErrorMessage name="email" render={mess => {
               return( <p className="error_mess">{mess}</p>)}} />
                </div>
                <div className="input"><Field 

          onChange={formikProps.handleChange}
          name="password" placeholder="Password" type="password"/>
          <ErrorMessage name="password" render={mess => {
                return(<p className="error_mess">{mess}</p>)

          }} />
          </div>
          <div className="input">
            <Field name="confirmPass" placeholder="Confirm Password" type="password"/>
            <ErrorMessage name="confirmPass" render={mess => {
                return(
                    <p className="error_mess">{mess}</p>
                )
            }}/>
          </div>
        
          <div className="login">
          <button  className="btn-login">{props.name}</button>

         {/*  {formikProps.values.taiKhoan && formikProps.values.matKhau && formikProps.values.hoTen ? 
              : <button disabled className="btn-no-login">Sign Up</button>
          } */}
            </div>
            {props.check === 0 &&  <div className="signin_q">
              
              Already a member? <NavLink to="/signin">Sign In</NavLink>
          </div>
          }
           
            </Form>
        )
    }}</Formik>
    );
};

export default SignUp;