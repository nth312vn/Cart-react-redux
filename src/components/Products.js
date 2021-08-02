import { Component } from "react";
import { connect } from "react-redux";
import Product from './Product'

class Products extends Component {
    
    render() {
        
        return (

            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">

                    {this.props.children}
                </div>
            </section>



        );


    }
}
const mapStatetoProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStatetoProps, null)(Products);