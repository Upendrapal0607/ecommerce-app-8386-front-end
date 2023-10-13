import { ProductUrl } from "../../Url/Url"
import { GET_REQUEST_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL } from "./ActionType"
import axios from "axios"

export const getAllProduct = payload => async dispatch => {
    try {
        dispatch({ type: PRODUCT_REQUEST })
        await axios.get(ProductUrl, payload).then(res => {
            // console.log({userPro:res})
            dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data })
            return res.data
        }).catch(err => {
            console.log({ err });
            dispatch({ type: PRODUCT_REQUEST_FAIL })
        })
    } catch (error) {
        dispatch({ type: PRODUCT_REQUEST_FAIL })
    }

}