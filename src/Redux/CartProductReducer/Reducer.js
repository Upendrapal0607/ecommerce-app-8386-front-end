import { CART_PRODUCT_REQUEST, CART_PRODUCT_REQUEST_FAIL, DELETE_CART_REQUEST_SUCCESS, GET_CART_PRODUCT_REQUEST_SUCCESS, POST_CART_REQUEST_SUCCESS, UPDATE_CART_TO_EMPTY } from "./ActionType"

const initialState = {
    isLoading: false,
    data: [],
    isError: false
}

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_PRODUCT_REQUEST: return { ...state, isLoading: true }
        case GET_CART_PRODUCT_REQUEST_SUCCESS: return { ...state, isLoading: false, data: payload }
        case CART_PRODUCT_REQUEST_FAIL: return { ...state, isLoading: false, data: [], isError: true }
        case POST_CART_REQUEST_SUCCESS: return { ...state, isLoading: false, isError: false }
        case DELETE_CART_REQUEST_SUCCESS: return { ...state, isLoading: false, isError: false }
        case UPDATE_CART_TO_EMPTY: return { ...state, isLoading: false, isError: false, data: [] }
        default: return state

    }
}