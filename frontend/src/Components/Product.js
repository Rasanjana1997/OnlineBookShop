import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({imageUrl, name, price, description, productId}) => {
    return(
        <div className="product">
            <img 
            src={imageUrl}
            alt={name} 
            className="product-img">
            </img>
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product_description">
                    {description.substring(0, 80)}...
                </p>
                <p className="product-price">RS {price}</p>
                <Link to={`/product/${productId}`} className="info-button">View</Link>
            </div>
        </div>
    )
}

export default Product;