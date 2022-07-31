import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup'

const SignUp = (props) => {

    const handleSubmit = (values) => {
        const {email, phone, username, password } = values
        console.log(email, phone, username, password)

        axios({
            method: "POST",
            url: "https://server-courses-next.herokuapp.com/api/v1/register",  
            data: {email, phone, username, password}
        })
        .then(rest => {
        console.log(rest)
    }).catch(err => {
        console.log(err)
    })
    }
    const validate = yup.object().shape({
        password: yup.string().required('Password is required!').min(6, 'Password must be at least 6 characters'),
        username: yup.string().required("First name is required!"),
        email: yup.string().required('Email is required').email('Email is invalid!')
    })
    return (
       <Formik
        validationSchema={validate}
        initialValues={{ 
            password: "",
            email: "",
            phone: "",
            username: "",
        }}
        onSubmit={handleSubmit}
        
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
                    <Field onChange={formikProps.handleChange} name="email" placeholder="Email" type="text"/>
                    <ErrorMessage name="email" render={mess => {
               return( <p className="error_mess">{mess}</p>)}} />
                </div>
                <div className="input"><Field 

          onChange={formikProps.handleChange}
          name="password" placeholder="Password" type="password"/>
          <ErrorMessage name="matKhau" render={mess => {
                return(<p className="error_mess">{mess}</p>)

          }} />
          </div>
          <div className="signin_q">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className="lable"> I agree</label>
              <NavLink to="/signin">Sign In</NavLink>
          </div>
          <div className="login">
          <button  className="btn-login">Sign Up</button>

         {/*  {formikProps.values.taiKhoan && formikProps.values.matKhau && formikProps.values.hoTen ? 
              : <button disabled className="btn-no-login">Sign Up</button>
          } */}
            </div>
            </Form>
        )
    }}</Formik>
    );
};

export default SignUp;