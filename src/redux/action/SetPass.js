import axios from "axios"
import { head } from "./Api"

export const setPass = (information, newPass) => {
    return async dispatch => {
        const {id} = information
        const password = newPass
        console.log(id, newPass)
        
            try {
                 const res = await axios({
                    url: `${head}/api/v1/user/update`,
                    method: "PUT",
                    data: {id, password},
                  })
                  console.log(res)
                   
            }catch(err) {
            console.log(err)
        }
       
    }
}