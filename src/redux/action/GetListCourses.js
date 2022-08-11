import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const getListCourses = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: "GET",
                url: `${head}/api/v1/course/read`,

            })
            dispatch({type: actionTypes.GET_LIST_COURSES, payload: res.data.DT})
        }catch (err) {
            console.log(err)
        }
    }
}