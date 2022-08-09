import { actionTypes } from "../action/types";

const initial = {
    infor: "",
    check: -999,
    groupId: 0
}
const UserReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            state.check = action.payload.EC
            state.infor = action.payload.DT
            state.groupId = action.payload.DT.groupId
            return {...state}  
            
        case actionTypes.SIGN_OUT: 
        state.check = -999;
        state.groupId = 0
        return {...state}  

       
        default:
            return {...state}
    }
}
export default UserReducer;