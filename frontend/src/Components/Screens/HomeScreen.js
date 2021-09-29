import "./HomeScreen.css";
import Product from "../Product"
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";

//Actions
import { getProducts as listProducts} from "../redux/actions/productActions";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return(
        <div>
            <h2 className="homeScreen-title">Latest Books</h2>
        <div className="homeScreen">
            <div className="homeScreen-products">
                {error ? ( 
                    <h2>{error}</h2> 
                ) : (
                products.map((product) => 
                < Product
                    key = {product._id}
                    productId = {product._id}
                    name = {product.name}
                    price = {product.price}
                    description = {product.description}
                    imageUrl = {product.imageUrl}
                />)
                )}
            </div>
        </div>
        </div>
    );
}

export default HomeScreen;