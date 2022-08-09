import { actionTypes } from "../action/types";

const initial = {
    password: "",
    codeForgot: "",
    information: ""

}
const ResetPass = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.SET_PASS:
            break;
            case actionTypes.GET_CODE: 
            state.codeForgot = action.payload;
            return {...state}
    case actionTypes.SET_OBJECT_FORGOT: 
            state.information = action.payload
            return {...state}
        default:
           return  {...state}
    }
}
export default ResetPass