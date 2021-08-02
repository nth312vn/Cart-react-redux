import *as types from './../constants/ActionTypes'

export const addToCart=(product,quantity)=>{
    return{
        type:types.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}
export const actChangeMessage=(message)=>{
    return{
        type:types.CHANGE_MESSAGE,
        message:message
    }
}
export const actDeleteProductInCart=(product)=>{
    return{
        type:types.DELETE_PRODUCT_IN_CART,
        product:product
    }
}
export const actUpDateQuantity=(product,quantity)=>{
    return{
        type:types.UPDATE_QUANTITY,
        product:product,
        quantity:quantity
    }
}