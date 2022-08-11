import { actionTypes } from "../action/types";

const initial = {
    listCategory: []
}
const CategoryReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY:
            state.listCategory = action.payload
            return {...state};
    
        default:
            return {...state};
    }
}
export default CategoryReducer