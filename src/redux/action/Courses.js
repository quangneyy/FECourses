import axios from "axios"
import { actionTypes } from "./types"

const createCourse = (data) => {
    return async dispatch => {
        try {
            const res = axios({
                url: "http://localhost:8080/api/v1/courses/create",
                method: "POST",
                data: data
            })
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }
}