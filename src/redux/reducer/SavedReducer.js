import { actionTypes } from "../action/types";

const initial = {
    listSaved: []
}
const SavedReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_SAVED_LIST:
            state.listSaved = action.payload
            return {...state};
    
        default:
            return {...state};
    }
}
export default SavedReducer