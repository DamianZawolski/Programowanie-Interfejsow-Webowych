import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { useUser } from "../connections/userService";
import { readOffers } from "../connections/hotelsService";

const Browse = (hotels) => {
    const [query, setQuery] = useState("");
    const [offersHTML, setOffersHTML] = useState([]);
    const [offers, setOffers] = useState([]);

    const user = useUser();

    useEffect(() => {
        readOffers().then((docs) => setOffers(docs));
    }, [user]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        let HTML = [];
if (hotels && hotels.hotels) {
    HTML = hotels.hotels
        .map((it) => (
            <HotelCard
                key={it.id}
                id={it.id}
                name={it.name}
                description={it.description}
                location={it.location}
                stars={it.stars}
                price={it.price}
                imageURL={it.imageURL}
            />
        ));
}
        setOffersHTML(HTML);
    }, [query, hotels]);


    return (
        <div>
            <section id="browse" className="browse-section">
                <p className="title-middle">Explore the hotels</p>
                <input
                    className="searchbar"
                    placeholder="Search by hotel name, place, description etc."
                    value={query}
                    onChange={handleSearch}
                />
            </section>
            <section className="grid hotel-cards">{offersHTML}</section>
        </div>
    );
};

export default Browse;
