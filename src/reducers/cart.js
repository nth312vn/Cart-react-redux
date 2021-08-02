import *as types from './../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('CART'));
const initialState=data?data:[
];
const cart =(state=initialState,action)=>{
    switch(action.type){
        case types.ADD_TO_CART:
            var product=action.product;
            var quantity=action.quantity;
            const newState=[...state];
            var index=findProductInCart(newState,product);
            if (index !==-1){
                newState[index].quantity=newState[index].quantity+quantity;
            }
            else{
                newState.push({
                    product:product,
                    quantity:quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(newState))
            return newState;
        case types.DELETE_PRODUCT_IN_CART:
            product=action.product;
            
           index=findProductInCart(state,product);
            if (index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_QUANTITY:
            const new2State=[...state]
            quantity=action.quantity;
            product=action.product;
            index=findProductInCart(state,product);
            if (index!==-1){
                new2State[index].quantity=action.quantity;
                
            }
            localStorage.setItem('CART',JSON.stringify(new2State));
            return new2State;
        default:
            return [...state]
    }
}
 var findProductInCart=(cart,product)=>{
    var index=-1;
    if (cart.length>0){
        for (var i=0;i<cart.length;i++){
            if (product.id===cart[i].product.id){
                index=i;
                break;
            }
        }
    }
    return index;
}
export default cart;