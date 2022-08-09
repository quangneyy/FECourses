import { actionTypes } from "./types"

export const search = (arr) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.SET_LIST_SEARCH, payload: arr})
    }
}