import axios from "axios"
import { actionTypes } from "./types"

export const  signUp = (values, callback) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.LOADING})        
        try {
        const result = await axios({
            method: "POST",
            url: "https://server-courses-next.herokuapp.com/api/v1/register",
            data: values
        })
        if(result.data.EC === 1) {
            alert(result.data.EM)
        }
        else {
            alert(result.data.EM)
         callback()
        }
        dispatch({type: actionTypes.LOADING})

    }
    catch(err) {
        console.log(err)
  
    }
}
}