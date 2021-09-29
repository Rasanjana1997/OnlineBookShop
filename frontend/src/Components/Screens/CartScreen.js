import "./CartScreen.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import CartItem from "../cartItem";

import {addToCart, removeFromCart} from "../redux/actions/cartActions";

const CartScreen = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }
    
    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }
    
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
    }

    return(
        <div className="cartScreen">
            <div className="cartScreen-left">
                <h2>Books Cart</h2>

                {cartItems.length === 0 ? (
                    <div className="rasa1">
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                ) : (
                    cartItems.map((item) => <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />)
                )}

            </div>
            <div className="cartScreen-right">
                <div className="cartScreen-info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>Rs {getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartScreen