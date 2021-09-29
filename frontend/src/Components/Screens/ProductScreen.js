import "./ProductScreen.css";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// Actions
import {getProductDetails} from "../redux/actions/productActions";
import {addToCart} from "../redux/actions/cartActions";

const ProductScreen = ({match, history}) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        if(product && match.params.id !== product._id){
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match]); 

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    };

    return(
        <div>
        <h2 className="header">View Book</h2>
        <div className="productScreen">
            {loading? (
                <h2>Loading..</h2>
            ) : error ? (
                <h2>error</h2> 
            ) : (
                <>
                <div className="productscreen-left">
                <div className="left-image">
                    <img className="img" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="left-info">
                    <p className="product-name">{product.name}</p>
                    <p>Price : <span>Rs{product.price}</span> </p>
                    <p>Description : {product.description} </p>
                </div>
                </div>
                <div className="productscreen-right">
                <h3>Add To Cart</h3>
                <div className="right-info">
                    <p>
                        Price : <span> Rs {product.price} </span>
                    </p>
                    <p>
                        Status : <span>{product.countInStock > 0 ? "InStock" : "Out Of Stock"}</span>
                    </p>
                    <p>
                        Quantity : 
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))} 
                        </select>
                    </p>
                    <p>  
                        <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                    </p>
                </div>
            </div>
            </>    
            )

            }
        </div>
        </div>
    );
}

export default ProductScreen;