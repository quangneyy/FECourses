import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

const createCourse = (data) => {
    return async dispatch => {
        try {
            const res = axios({
                url: `${head}/api/v1/course/create`,
                method: "POST",
                data: data
            })
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }
}
export default createCourse