import { actionTypes } from "../action/types";

const initial = {
    arrCourses: []
}
 const CoursesReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_COURSES:
            state.arrCourses = action.payload
            return {...state};
    
        default:
            return {...state};
    }
}
export default CoursesReducer;