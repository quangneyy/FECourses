import { actionTypes } from "../action/types";

const initial = {
    listUser: []
}
 const ListUser = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_USERS:
            state.listUser = action.payload
            return {...state}
    
        default:
            return {...state}
    }
}
export default ListUser