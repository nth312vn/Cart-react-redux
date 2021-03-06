import { Component } from 'react';
import Carts from './components/Carts';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
import ProductsContainer from './containers/ProductsContainer';


class App extends Component {

    render() {
        return (

            <div>
                <Header />

                <main id="mainContainer">
                    <div className="container">

                        <ProductsContainer />
                        <MessageContainer/>
                        <CartContainer/>


                    </div>
                </main>
                <Footer />


            </div>
        )



    }
}
export default App;