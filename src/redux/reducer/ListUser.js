import { actionTypes } from "../action/types";

const initial = {
    listUser: [],
    pageUser: [],
    totalPage: 0,
    searchList: [],
    openSearch: false
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
        case actionTypes.SET_LIST_SEARCH: 
        state.searchList = action.payload
        return {...state}
        case actionTypes.SET_SEARCH_OPEN: 
        console.log(7)
        state.openSearch = action.payload
        return {...state}
        default:
            return {...state}
    }
}
export default ListUser