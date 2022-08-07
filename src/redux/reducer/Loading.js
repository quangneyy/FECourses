import { actionTypes } from "../action/types";

const initail = {
    isLoading: false
}
const Loading = (state = initail, action) => {

    switch (action.type) {
        case actionTypes.LOADING:
            state.isLoading = !state.isLoading;
            return {...state}
        default:
            return {...state}
    }
}
export default Loading