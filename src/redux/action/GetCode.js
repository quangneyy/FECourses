import axios from "axios";
import { head } from "./Api";
import { sendEmail } from "./SendEmail";
import { actionTypes } from "./types";

export const getCode = (values, callBack) => {
    return async dispatch => {
        const code = (Math.floor(Math.random() * 50000) + 10000)
        dispatch({type: actionTypes.GET_CODE, payload: code})
        dispatch({type: actionTypes.LOADING}) 
        try {
            const res = await axios({
                url: `${head}/api/v1/user/read`,
                method: "GET"
            })
            dispatch({type: actionTypes.GET_LIST_USERS, payload: res.data.DT})
            const object = res.data.DT.find(item => item.email === values)
            console.log(object)
            if(res.data.DT.find(item => item.email === values) !== undefined)  {
                dispatch({type: actionTypes.SET_OBJECT_FORGOT, payload: object})
                sendEmail(values, code, callBack) 
            }
            else 
                alert("Email không tồn tại hoặc chưa đăng ký!")
        }
        catch(err) {
            console.log(err)
        }
        dispatch({type: actionTypes.LOADING}) 



    }
}