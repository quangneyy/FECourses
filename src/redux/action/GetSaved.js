import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const getSaved = () => {
    return async dispatch => {
        try {
            const res = await axios({
                url: `${head}/api/v1/storageDetail/read`,
                method: "GET"
            })
            dispatch({type: actionTypes.GET_SAVED_LIST, payload: res.data.DT})

        }catch(err) {
            console.log(err)
        }
    }
}