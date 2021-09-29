import "./cartItem.css"
import {Link} from "react-router-dom";

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    return(
        <div className="cartItem">
            <div className="cartItem-image">
                <img src={item.imgUrl} alt={item.name}></img>
            </div>
            <Link to={`/product/${item.product}`} className="cartItem-name">
                <p>{item.name}</p>
            </Link>
            <p className="cartItem-price">Rs {item.price}</p>
            <select className="cart-select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x=>(
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartItem-delete" onClick = {() => removeHandler(item.product)}>
                 <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem