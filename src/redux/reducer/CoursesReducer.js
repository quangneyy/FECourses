import { actionTypes } from "../action/types";

const initial = {
    arrCourses: [],
    arrCoursesPage: []
}
 const CoursesReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_COURSES:
            state.arrCourses = action.payload
            return {...state};
        case actionTypes.GET_COURSES_PAGE: 
        state.arrCoursesPage = action.payload.course
        console.log(state.arrCoursesPage)
        return {...state}
    
        default:
            return {...state};
    }
}
export default CoursesReducer;