import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { Reducer as ProductReducer } from "./ProductReducer/Reducer"
import { Reducer as UserReducer } from "./UserReducer/Reducer"
import { Reducer as UserProductReducer } from "./UserProductReducer/Reducer"
import { Reducer as CartProduct } from "./CartProductReducer/Reducer"
const rootReducer = combineReducers({
    ProductReducer, UserReducer, UserProductReducer, CartProduct
})
// Reducer
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))