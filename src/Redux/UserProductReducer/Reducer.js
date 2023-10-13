import { GET_REQUEST_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL } from "./ActionType"

const initialState = {
    isLoading: false,
    Products: {},
    isError: false
}

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST: return { ...state, isLoading: true }
        case GET_REQUEST_SUCCESS: return { ...state, isLoading: false, Products: payload }
        case PRODUCT_REQUEST_FAIL: return { ...state, isLoading: false, Products: {}, isError: true }
        default: return state

    }
}