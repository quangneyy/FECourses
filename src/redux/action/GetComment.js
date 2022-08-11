import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const getComment = () => {
    return async dispatch => {
        try {
            const res = await axios({
                url: `${head}/api/v1/evaluate/read`,
                method: "GET"
            })
            dispatch({type: actionTypes.GET_COMMENT, payload: res.data.DT})
        }catch(err) {
            console.log(err)
        }
    }
}