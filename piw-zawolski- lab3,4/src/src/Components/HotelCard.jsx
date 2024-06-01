import { useNavigate } from "react-router-dom";
import arrow from "../Assets/Arrow.svg";

const HotelCard = ({ id, name, description, location, stars, price, imageURL }) => {
    const navigate = useNavigate();

    const handleOfferClick = () => {
        navigate("/hotel", {
            state: {
                id: id,
            },
        });
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
        </article>
    );
};

export default HotelCard;
