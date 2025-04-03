import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Productdetails.css";
import productsData from "../data/products.json"; // Ensure correct path

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const selectedProduct = productsData.find(p => p.id === parseInt(id));
        
        if (selectedProduct) {
            setProduct(selectedProduct);
            setMainImage(selectedProduct.images?.[0] ?? "https://via.placeholder.com/400");
        } else {
            setProduct(null);
        }
    }, [id]);

    if (!product) {
        return <h2 className="not-found">Product not found</h2>;
    }

    return (
        <div className="product-details-container">
            <div className="product-details-row">
                {/* Product Image Section */}
                <div className="product-images">
                    <img src={mainImage} alt="Product" className="main-image" />
                    <div className="thumbnail-images">
                        {product.images?.length > 0 ? (
                            product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="thumbnail"
                                    onClick={() => setMainImage(img)}
                                />
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="product-info">
                    <h2 className="product-name">{product.name ?? "No Name"}</h2>
                    <p className="price">Price: {product.price ?? "N/A"}</p>
                    <p className="farmer">Farmer: {product.farmer ?? "Unknown"}</p>
                    <p className="location">Location: {product.location ?? "Unknown"}</p>
                    <p className="description">{product.description ?? "No description available."}</p>
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section">
                <h4>Customer Reviews</h4>
                <div className="ratings">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="rating-count">
                        {typeof product.reviews === "number" ? product.reviews : 0} ratings
                    </span>
                </div>

                {Array.isArray(product.vendorReviews) && product.vendorReviews.length > 0 ? (
                    product.vendorReviews.map((review, index) => (
                        <div key={index} className="review-item">
                            <strong>{review.vendorName}:</strong> <span>{review.comment}</span>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
