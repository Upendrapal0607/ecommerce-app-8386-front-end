import axios from "axios"
import { CART_PRODUCT_REQUEST, UPDATE_CART_TO_EMPTY, CART_PRODUCT_REQUEST_FAIL, DELETE_CART_REQUEST_SUCCESS, GET_CART_PRODUCT_REQUEST_SUCCESS, POST_CART_REQUEST_SUCCESS, UPDATE_CART_REQUEST_SUCCESS } from "./ActionType"
import { CartProductUrl } from "../../Url/Url"
import Cookies from "js-cookie";
const token = Cookies.get("login_token");
// console.log({ReducerToken:token})
export const getAllCartProduct = () => async dispatch => {
    try {
        dispatch({ type: CART_PRODUCT_REQUEST })
        return await axios.get(CartProductUrl, { headers: { Authorization: token } }).then(res => {
            // console.log({CartRes:res});
            dispatch({ type: GET_CART_PRODUCT_REQUEST_SUCCESS, payload: res.data?.CartData })
            return res.data
            console.log({ resData: res.data })
        }).catch(error => {
            console.log({ CartError: error })
            dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
        })
    } catch (error) {
        dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
    }
}
export const updateCartItem = (id, payload) => async dispatch => {
    try {
        dispatch({ type: CART_PRODUCT_REQUEST })
        return await axios.patch(`${CartProductUrl}/update/${id}`, payload, { headers: { Authorization: token } }).then(res => {
            dispatch({ type: UPDATE_CART_REQUEST_SUCCESS })
            return res.data
        }).catch(err => {
            dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
        })

    } catch (error) {
        dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
    }
}
export const AddToCartProduct = (payload) => async dispatch => {
    try {
        dispatch({ type: CART_PRODUCT_REQUEST })
        return await axios.post(`${CartProductUrl}/add`, payload, { headers: { Authorization: token } }).then(res => {
            dispatch({ type: POST_CART_REQUEST_SUCCESS, payload: res.data })
            console.log({ resInReducer: res.data })
            return res.data
        }).catch(err => {
            dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
        })

    } catch (error) {
        dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
    }
}
export const DeleteCartProduct = (payload) => async dispatch => {
    try {
        dispatch({ type: CART_PRODUCT_REQUEST })
        return await axios.delete(`${CartProductUrl}/delete/${payload}`, { headers: { Authorization: token } }).then(res => {
            dispatch({ type: DELETE_CART_REQUEST_SUCCESS, payload: res.data })
            return res.data
        }).catch(err => {
            dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
        })

    } catch (error) {
        dispatch({ type: CART_PRODUCT_REQUEST_FAIL })
    }
}

export const UpdateCartEmpty = () => async dispatch => {
    dispatch({ type: UPDATE_CART_TO_EMPTY })
}