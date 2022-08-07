import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"


export const getPageUser = (page, limit) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.LOADING})
        try {
            const res = await axios({
                url: `${head}/api/v1/user/read?page=${page}&limit=${limit}`,
                method: "GET"
            })
            dispatch({type: actionTypes.GET_PAGE_USER, payload: res.data.DT})
            dispatch({type: actionTypes.LOADING})
            
        }
        catch(err) {
            console.log(err)
        }
    }
}