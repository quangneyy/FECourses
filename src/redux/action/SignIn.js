import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const signIn = (data, callback) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.LOADING})
        try {
            const res = await axios({
                method: "POST",
                url: `${head}/api/v1/login`,
                data: data
            })
            dispatch({type: actionTypes.LOADING})
            if(res.data.EC !==0) {
                alert(res.data.EM)
            }
            else {
                dispatch({type: actionTypes.GET_USER, payload: res.data})
                callback()
            }
        }
        catch(err) {
            alert("Tai khoan hoac mat khau khong chinh xac")
        }
    }
}