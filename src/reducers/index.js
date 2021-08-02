import { combineReducers } from "redux";
import cart from "./cart";
import message from "./message";
import products from "./product";
const appReducer=combineReducers({
    products:products,
    cart:cart,
    message:message
})
export default appReducer;