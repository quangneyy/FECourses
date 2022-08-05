import { actionTypes } from "../action/types";

const initial = {
    listUser: [],
    pageUser: [],
    totalPage: 0,
}
 const ListUser = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_USERS:
            state.listUser = action.payload
            return {...state}
        case actionTypes.GET_PAGE_USER: 
        state.pageUser = action.payload.users
        state.totalPage = action.payload.totalPages
        console.log(action.payload)
        return {...state}
    
        default:
            return {...state}
    }
}
export default ListUser