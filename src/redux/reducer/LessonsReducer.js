import { actionTypes } from "../action/types";

const initial = {
    listLessons: [],
    
    inforLesson: ""
}
const LessonsReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_LESSONS:
            state.listLessons = action.payload
            return {...state};
    
        default:
            return {...state};
    }
}
export default LessonsReducer