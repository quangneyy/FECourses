import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const getListLessons = (id) => {
    return async dispatch => {
        try {
            const res = await axios({
                url: `${head}/api/v1/lesson/read`,
                method: "GET",
                data: id
              })
              dispatch({type: actionTypes.GET_LIST_LESSONS, payload: res.data.DT})
        }
        catch(err) {
            console.log(err)
        }
    }
}