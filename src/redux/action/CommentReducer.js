import { actionTypes } from "./types";

const initial = {
    arrComment: []
}
const CommentReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_COMMENT:
            state.arrComment = action.payload
            return {...state};
    
        default:
            return {...state};
    }
}
export default CommentReducer