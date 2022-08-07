import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from "yup"
import { upLoadFile } from '../../redux/action/Uploadfile';

const Lesson = (props) => {
    const ref = useRef()
    const dispatch = useDispatch()
    const validate = yup.object().shape({
        tenBH: yup.string().required("Vui lòng nhập tên bài học!"),
        maKH: yup.string().required("Vui lòng nhập mã khoá học!")
    })
    return (
        <div>
       <Formik 
        initialValues={{
            tenBH: "",
            maKH: "",
            video: "",
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
                <button style={{padding: "5px 20px"}} onClick={ (e) => {
                    e.preventDefault()
                    const x = ref.current.files[0]
                    console.log(formikProps.values.maKH)
                    dispatch(upLoadFile(x, `videos/${formikProps.values.maKH}`))

                }}>Import</button>
            </Form>
        )
       }}</Formik></div>
    );
};

export default Lesson;