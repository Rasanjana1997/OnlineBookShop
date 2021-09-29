import "./Navbar.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }
 
    return(
        <nav className="navbar">

            <div className="navbar-logo">
                <h2>Ganegoda Book Shop</h2>
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/cart" className="cart-link">
                        <span>
                        <i className="fas fa-shopping-cart" id="lcon"></i>
                        Cart
                        <span className="cartlogo_badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="shop-link">
                        Shop
                    </Link>
                </li>
            </ul>

            <div className="menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    );
}

export default Navbar;