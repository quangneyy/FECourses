import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const deleteUser = (id) => {

    return async dispatch => {
        console.log(1)
        dispatch({type: actionTypes.LOADING})

        try {
            const res =  await axios({
                url: `${head}/api/v1/user/delete`,
                method: "DELETE",
                data: {id}
            })
            alert(res.data.EM)
        }
        catch (err) {
            console.log(err)
        }
    dispatch({type: actionTypes.LOADING})


    }
}