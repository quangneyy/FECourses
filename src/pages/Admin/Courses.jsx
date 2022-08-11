import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/action/types";
import * as yup from "yup";
import { upLoadFile } from "../../redux/action/Uploadfile";
import { getCategory } from "../../redux/action/GetCategory";

const Courses = (props) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const refForm = useRef()
  const ref2 = useRef()
  
 
  const handleSubmit = (values) => {
    const x = ref.current.files[0];
    values.theLoai = ref2.current.value
    console.log(values)
   dispatch(upLoadFile(x, "images", values, 0))
    }
  const validate = yup.object().shape({
    tenKH: yup.string().required("Vui lòng nhập tên khoá học"),
    tacGia: yup.string().required("Vui lòng nhập tên tác giả"),
  });
  const styleInput = {
    width: "50%"
  }
  useEffect(() => {
    dispatch(getCategory())

  }, [])
  const {listCategory} = useSelector(state => state.CategoryReducer)


  return (
    <div>
      <Formik
      innerRef={refForm}
      onSubmit={handleSubmit}
        validationSchema={validate}
        initialValues={{
          tenKH: "",
          tacGia: "",
          theLoai: ""

        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <div className="input">
                <Field
                  name="tenKH"
                  type="string"
                  onChange={formikProps.handleChange}
                  placeholder="Tên khoá học"
                  style={styleInput}
                />
                <ErrorMessage
                  name="tenKH"
                  render={(mess) => {
                    return <p className="error_mess">{mess}</p>;
                  }}
                />
              </div>
              <div className="input">
                <Field
                style={styleInput}
                  name="tacGia"
                  type="string"
                  onChange={formikProps.handleChange}
                  placeholder="Tên tác giả"
                />
                <ErrorMessage
                  name="tacGia"
                  render={(mess) => {
                    return <p className="error_mess">{mess}</p>;
                  }}
                />
              </div>
              <div style={{marginTop: "1.5rem"}}>
              <select ref={ref2}>
                {listCategory.map((item, index) => {
                  return <option value={index+1} key={index}>{item.name}</option>
                })}
              </select>
              </div>
              <div style={{marginTop: "1.5rem"}}>
              <label htmlFor="img" style={{display: "block"}}>Vui lòng chọn ảnh
                </label>
              <input accept="image" id="img" ref={ref} type="file"></input>
              </div>
              <button style={{marginTop: "1.5rem", padding: "5px 20px"}} >Import</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Courses;
