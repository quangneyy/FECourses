import axios from "axios"
import { actionTypes } from "./types"

export const signIn = (data, callback) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.LOADING})
        try {
            const res = await axios({
                method: "POST",
                url: "https://server-courses-next.herokuapp.com/api/v1/login",
                data: data
            })
            dispatch({type: actionTypes.GET_USER, payload: res.data.EC})
            dispatch({type: actionTypes.LOADING})
            callback()
        }
        catch(err) {
            alert("Tai khoan hoac mat khau khong chinh xac")
        }
    }
}