import axios from "axios"
import { head } from "./Api"
import { actionTypes } from "./types"

export const  signUp = (values, callback) => {
    console.log(values)
    return async (dispatch) => {
        dispatch({type: actionTypes.LOADING})        
        try {
        const result = await axios({
            url: `${head}/api/v1/register`,
            method: "POST",
            data: values
        })
        console.log(result)
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