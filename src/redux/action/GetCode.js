import axios from "axios";
import { sendEmail } from "./SendEmail";
import { actionTypes } from "./types";

export const getCode = (values, callBack) => {
    return async dispatch => {
        const code = (Math.floor(Math.random() * 50000) + 10000)
        dispatch({type: actionTypes.GET_CODE, payload: code})
        dispatch({type: actionTypes.LOADING})
        try {
            const res = await axios({
                url: "https://server-courses-next.herokuapp.com/api/v1/user/read",
                method: "GET"
            })
            dispatch({type: actionTypes.GET_LIST_USERS, payload: res.data.DT})
            if(res.data.DT.find(item => item.email === values) !== undefined) 
                sendEmail(values, code, callBack) 
            else 
                alert("Email không tồn tại hoặc chưa đăng ký!")

        }
        catch(err) {
            console.log(err)
        }

    }
}