import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../Assets/Arrow.svg";
import { CartContext } from "../Components/CartContext"; // Import CartContext

const HotelCard = ({ id, name, description, location, stars, price, imageURL }) => {
    const navigate = useNavigate();
    const { dispatch } = useContext(CartContext); // Get dispatch function from CartContext
    const [addedToCart, setAddedToCart] = useState(false); // State to track if added to cart

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, name, description, price, imageURL } }); // Dispatch action to add to cart
        setAddedToCart(true); // Set addedToCart to true
        setTimeout(() => {
            setAddedToCart(false); // Reset addedToCart after 3 seconds
        }, 3000);
    };

    // Ensure stars is a number between 0 and 5
    stars = (typeof stars === 'number' && stars >= 0 && stars <= 5) ? stars : 0;
    return (
        <article className="hotel-card">
            <div
                className="card-image browse-image"
                style={{ backgroundImage: `url(${imageURL})` }}
            >
            </div>
            <p className="text-middle">{name}</p>
            <p className="text-small">{description}</p>
            <div className="hotel-card-footer">
                <p className="text-middle">{"★".repeat(stars) + "☆".repeat(5 - stars)}</p>
                <p className="text-middle">{price}€/room</p>
            </div>
            <button className="button primary">
                View offer <img src={arrow} alt="arrow" />
            </button>
            <button className="button primary" onClick={handleAddToCart}>
                {addedToCart ? 'Added to cart' : 'Add to cart'} {/* Show 'Added to cart' if addedToCart is true */}
                <img src={arrow} alt="arrow" />
            </button>
        </article>
    );
};

export default HotelCard;
