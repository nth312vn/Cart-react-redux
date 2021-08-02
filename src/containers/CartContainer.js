import { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Carts from "../components/Carts";
import CartResult from "../components/CartResult";
import { actChangeMessage, actDeleteProductInCart, actUpDateQuantity } from "../actions";

class CartContainer extends Component{
    showCartItem=(cart)=>{
        var result;
         result=cart.map((item,index)=>{
            return (
                <CartItem 
                    key={item.product.id}
                    item={item}
                    onDeleteProductInCart={this.props.onDeleteProductInCart}
                    onChangeMessage={this.props.onChangeMessage}
                    onUpDateQuantity={this.props.onUpDateQuantity}
                />
            )
        })
        return result;
    }
    showTotalAmount=(cart)=>{
        return <CartResult cart={cart} />
    }
    render(){
        var cart=this.props.cart;
        
        return(
            <Carts>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Carts>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        cart:state.cart
    }
}
const mapDispathToProps=(dispatch,props)=>{
    return{
        onDeleteProductInCart:(product)=>{
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message));
        },
        onUpDateQuantity:(product,quantity)=>{
            dispatch(actUpDateQuantity(product,quantity))
        }

    }
}
export default connect(mapStateToProps,mapDispathToProps)(CartContainer);