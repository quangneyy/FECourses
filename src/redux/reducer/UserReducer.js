import { actionTypes } from "../action/types";

const initial = {
    infor: "",
    check: -999,
    codeForgot: "",
    groupId: 0
}
const UserReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            state.check = action.payload.EC
            state.infor = action.payload.DT
            state.groupId = action.payload.DT.groupId
            console.log(action.payload)
            return {...state}  
            
        case actionTypes.SIGN_OUT: 
        state.check = -999;
        state.groupId = 0
        return {...state}  

        case actionTypes.GET_CODE: 
        state.codeForgot = action.payload;
        return {...state}
        default:
            return {...state}
    }
}
export default UserReducer;