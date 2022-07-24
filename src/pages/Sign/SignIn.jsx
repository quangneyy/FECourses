import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from "yup"

const SignIn = (props) => {
    const handleSubmit = (values) => {
        console.log(values)

    }
    const validate = yup.object().shape({
        taiKhoan: yup.string().required('Username is required!'),
        matKhau: yup.string().required('Password is required!')
    })
    return (
        <Formik
            validationSchema={validate}
            initialValues={{
                taiKhoan: "",
                matKhau: ""
            }}
            onSubmit={handleSubmit}
            
        >{formikProps => {
    
          return(
              <Form>
              <div className="input">
                <Field
                  name="taiKhoan"
                  type="text"
                  placeholder="Username"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage 
                name="taiKhoan"
                render={mess => {
                  return(
                    <p className="error_mess">{mess}</p>
                  )
                }}/>
              </div>
              <div className="input">
                <Field
                  name="matKhau"
                  type="password"
                  placeholder="Password"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage 
                name="matKhau"
                render={mess => {
                  return(
                    <p className="error_mess">{mess}</p>
                  )
                }} />
              </div>
              <div className="signin_q">
                  <input id="remember" type="checkbox" 
                      defaultChecked="checked"
                  />
                  <label htmlFor="remember" className="lable">Remember</label>
                  <NavLink to="/signup">Sign Up?</NavLink>
              </div>
              <div className="login">
              {formikProps.values.taiKhoan && formikProps.values.matKhau ? 
                <button className="btn-login">Sign In</button>
                  : <button disabled className="btn-no-login">Sign In</button>
              }
                </div>
                </Form>
          )
      }}</Formik>
    );
};

export default SignIn;