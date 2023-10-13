import { DELETE_REQUEST_SUCCESS, GET_REQUEST_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL, UPDATE_REQUEST_SUCCESS } from "./ActionType";

const initialState = {
    isLoading: false,
    Product: {},
    isError: false
}


export const Reducer = ((state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST: return { ...state, isLoading: true }
        case GET_REQUEST_SUCCESS: return { ...state, isLoading: false, Product: payload }
        case PRODUCT_REQUEST_FAIL: return { ...state, isLoading: false, Product: {}, isError: true }
        case DELETE_REQUEST_SUCCESS: return { ...state }
        case UPDATE_REQUEST_SUCCESS: return { ...state }
        default: return state;

    }
})