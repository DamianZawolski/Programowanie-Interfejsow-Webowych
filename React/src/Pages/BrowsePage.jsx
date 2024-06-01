import { useOutletContext } from "react-router-dom";
import Browse from "../Components/Browse";

const BrowsePage = () => {
    const [hotels, setHotels] = useOutletContext();

    return (
        <div className="browse-section">
            <section className="page-title heart">
                <article>
                    <p className="title-large ">
                        Welcome, your tranquillity oasis awaits
                    </p>
                </article>
            </section>
            <Browse hotels={hotels} />
        </div>
    );
};

export default BrowsePage;
