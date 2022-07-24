import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup'

const SignUp = (props) => {
    const tesst =(e) => {
        console.log(e)
    }
    const validate = yup.object().shape({
        matKhau: yup.string().required('Password is required!').min(6, 'Password must be at least 6 characters'),
        ho: yup.string().required("First name is required!"),
        ten: yup.string().required("Last name is required!"),
        email: yup.string().required('Email is required').email('Email is invalid!')
    })
    return (
       <Formik
        validationSchema={validate}
        initialValues={{ 
            matKhau: "",
            email: "",
            soDt: "",
            maLoaiNguoiDung: "1",
            ho: "",
            ten: "",
        }}
        
       >{formikProps => {
        return (
            <Form>
                <div className="input name">
                    <div>
                    <Field onChange={formikProps.handleChange} name="ho" placeholder="First Name" type="text"/>
                    <ErrorMessage name="ho" render={mess => {
               return( <p className="error_mess">{mess}</p>)}} />
                    </div>
                    <div>
               <Field onChange={formikProps.handleChange} name="ten" type="text" placeholder="Last Name" />
              
               <ErrorMessage name="ten" render={mess => {
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
          name="matKhau" placeholder="Password" type="password"/>
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
          {formikProps.values.taiKhoan && formikProps.values.matKhau && formikProps.values.hoTen ? 
            <button className="btn-login">Sign Up</button>
              : <button disabled className="btn-no-login">Sign Up</button>
          }
            </div>
            </Form>
        )
    }}</Formik>
    );
};

export default SignUp;