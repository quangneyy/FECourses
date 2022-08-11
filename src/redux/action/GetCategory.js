import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const getCategory = () => {
    return async dispatch => {
        try {
            const res = await axios({
                url: `${head}/api/v1/category/read`,
                method: "GET"
            })
            dispatch({type: actionTypes.GET_CATEGORY, payload: res.data.DT})
        }
        catch(err) {
            console.log(err)
        }
    }
}