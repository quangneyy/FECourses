import axios from "axios"
import { actionTypes } from "./types"

export const deleteUser = (id) => {

    return async dispatch => {
        console.log(1)
        dispatch({type: actionTypes.LOADING})

       /*  try {
            const res =  await axios({
                url: "https://server-courses-next.herokuapp.com/api/v1/user/delete",
                method: "DELETE",
                data: {id}
            })
            console.log(res)

        }
        catch (err) {
            console.log(err)
        } */
    dispatch({type: actionTypes.LOADING})


    }
}