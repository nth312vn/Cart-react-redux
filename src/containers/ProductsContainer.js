import { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import { actChangeMessage, addToCart } from "../actions";


class ProductsContainer extends Component {
    showProducts = (products) => {
        var results;
        
        if (products.length > 0) {
            results = products.map((product, index) => {
                return <Product
                    key={product.id}
                    product={product}
                    addToCart={this.props.addToCart}
                    onChangeMessage={this.props.onChangeMessage}


                />
            })
        }
        return results;
    }
    
    render() {
        var products=this.props.products;
       
        return (

            <Products>
                {this.showProducts(products)}
            </Products>



        );
        
        
    }
}
const mapStatetoProps=(state)=>{
    return{
        products:state.products
    }
}
const mapDispathToProps=(dispath,props)=>{
    return{
        addToCart:(product)=>{
            dispath(addToCart(product,1));
        },
        onChangeMessage:(message)=>{
            dispath(actChangeMessage(message))
        }
    }
}
export default connect(mapStatetoProps,mapDispathToProps)(ProductsContainer);