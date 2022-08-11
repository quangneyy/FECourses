import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from "yup"
import { actionTypes } from '../../redux/action/types';
import { upLoadFile } from '../../redux/action/Uploadfile';

const Lesson = (props) => {
    const ref = useRef()
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        const x = ref.current.files[0];
        console.log(values)
        dispatch (() => dispatch({type: actionTypes.LOADING}))

        dispatch(upLoadFile(x, `video/${values.maKH}`, values, 1))
        dispatch (() => dispatch({type: actionTypes.LOADING}))


        

        }
    const validate = yup.object().shape({
        tenBH: yup.string().required("Vui lòng nhập tên bài học!"),
        maKH: yup.string().required("Vui lòng nhập mã khoá học!")
    })
    return (
        <div>
       <Formik 
       onSubmit={handleSubmit}
        initialValues={{
            tenBH: "",
            maKH: "",
        }}
        validationSchema={validate}
       >{formikProps => {
        return (
            <Form>
                <div className="input">
                    <Field type="string" placeholder="Tên bài học" name="tenBH" onChange={formikProps.handleChange}/>
                    <ErrorMessage
                name="tenBH"
                render={mess => {
                  return(
                    <p className="error_mess">{mess}</p>
                  )
                }}/>
                </div>
                <div className="input">
                    <Field type="string" placeholder="Mã khoá học" name="maKH" onChange={formikProps.handleChange}/>
                    <ErrorMessage 
                name="maKH"
                render={mess => {
                  return(
                    <p className="error_mess">{mess}</p>
                  )
                }}/>
                </div>
                <div style={{margin: "1.5rem 0"}}>
                <label style={{display: "block"}}>Vui lòng chọn video cho bài học</label>
                <input ref={ref} type="file"></input>
                </div>
                <button style={{padding: "5px 20px"}}>Import</button>
            </Form>
        )
       }}</Formik></div>
    );
};

export default Lesson;