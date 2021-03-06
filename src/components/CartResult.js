import { Component } from "react";

class CartResult extends Component {
    showTotalMout=(cart)=>{
        var total=0;
        for (var i=0;i<cart.length;i++)
        {
            total=total+cart[i].product.price*cart[i].quantity;
        }
        return total;
    }

    render() {
        var cart=this.props.cart;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalMout(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        )
    }
}
export default CartResult;