import "./SideDrawer.css";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const SideDrawer = ({show, click}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }
 

    const sidDrawerClass =["sidedrawer"];

    if (show){
        sidDrawerClass.push("show");
    }

    return(
        <div className={sidDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={click}>
                <li className="box">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart<span className="sidedrawer_badge">{getCartCount()}</span>
                        </span>    
                    </Link>
                </li>
                <li className="box">
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;