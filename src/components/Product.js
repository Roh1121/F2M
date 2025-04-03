import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css';

const products = [
    {
        id: 1,
        image: '/images/apple.jpg', 
        name: 'Apple',
        price: 'Rs.1000',
        location: 'Old Adilabad',
        farmer: 'Mallappa',
        daysListed: '7 days',
    },
    {
        id: 2,
        image: '/images/lemon.jpg',
        name: 'Lemon',
        price: 'Rs.1300',
        location: 'Karimnagar',
        farmer: 'Shankar',
        daysListed: '4 days',
    },
    {
        id: 3,
        image: '/images/Dal.jpg',
        name: 'Dal',
        price: 'Rs.2200',
        location: 'Warangal',
        farmer: 'Nikhil Raj',
        daysListed: '8 days',
    },
    {
        id: 4,
        image: '/images/Rice.jpg',
        name: 'Rice',
        price: 'Rs.1500',
        location: 'Peddapalli',
        farmer: 'Suresh',
        daysListed: '2 days',
    },
    {
        id: 5,
        image: '/images/Tomato.jpg',
        name: 'Tomato',
        price: 'Rs.5000',
        location: 'Kolar',
        farmer: 'Laxman',
        daysListed: '10 days',
    },
];

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
                <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <div className="product-details">
                <h3 className="product-title">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p>Price: {product.price}</p>
                <p>Location: {product.location}</p>
                <p>Farmer: {product.farmer}</p>
                <p>Days Listed: {product.daysListed}</p>
            </div>
            <button className="buy-button" onClick={handleBuyClick}>Buy</button>
        </div>
    );
};

const Product = () => {
    return (
        <div className="product-listing">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Product;
