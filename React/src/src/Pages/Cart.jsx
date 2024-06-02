// Cart.jsx
import { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import "../App.css";

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    // Function to remove an item from the cart
    const removeItemFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    // Function to calculate the total price of all items in the cart
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    // Function to group items in cart by their id
    const groupCartItems = () => {
        const groupedItems = {};
        cart.forEach((item) => {
            if (!groupedItems[item.id]) {
                groupedItems[item.id] = {
                    ...item,
                    quantity: 1 // Initialize quantity to 1 for new item
                };
            } else {
                groupedItems[item.id].quantity++; // Increment quantity for existing item
            }
        });
        return Object.values(groupedItems); // Convert object back to array of items
    };

    return (
        <div className="cart-section">
            <section className="page-title">
                <article>
                    <p className="title-large">Your Cart</p>
                </article>
            </section>
            <div className="cart-items">
                {groupCartItems().map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-details">
                            <p className="text-middle">{item.name}</p>
                            <p className="text-small">{item.description}</p>
                        </div>
                        <div className="cart-item-actions">
                            <p className="text-middle">{item.price}€</p>
                            <p className="text-middle">Quantity: {item.quantity}</p>
                            <button className="button primary" onClick={() => removeItemFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total-price">
                <p className="title-middle">Total Price: {calculateTotalPrice()}€</p>
            </div>
        </div>
    );
};

export default Cart;
