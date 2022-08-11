import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const getListCourses = () => {
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
export const getListCoursesPage = (page, limit) => {
    return async dispatch => {
        try {
            const res = await axios({
                url: `${head}/api/v1/course/read?page=${page}&limit=${limit}`,
                method: "GET"
            })
            dispatch({type: actionTypes.GET_COURSES_PAGE, payload: res.data.DT})

        }catch(err ) {
            console.log(err)
        }
    }
}