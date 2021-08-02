import { Component } from "react";
import *as message from './../constants/Messages'

class CartItem extends Component {
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    onDeleteProDuctInCart = (product) => {
        
        this.props.onDeleteProductInCart(product);
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onUpDateQuantity=(product,quantity)=>{
        if(quantity>=0){
            this.props.onUpDateQuantity(product,quantity);
            this.props.onChangeMessage(message.MSG_UPDATE_CART_SUCCESS);
        }
    }
    render() {
        var item = this.props.item;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                        onClick={()=>this.onUpDateQuantity(item.product,item.quantity-1)}
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label 
                        onClick={()=>this.onUpDateQuantity(item.product,item.quantity+1)}
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDeleteProDuctInCart(item.product)}

                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }
}
export default CartItem;