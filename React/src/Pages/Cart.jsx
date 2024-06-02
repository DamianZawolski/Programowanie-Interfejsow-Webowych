import React, { useState } from 'react';

const Cart = () => {
    const [items, setItems] = useState([]);

    // Function to add an item to the cart
    const addItemToCart = (item) => {
        setItems([...items, item]);
    };

    // Function to remove an item from the cart
    const removeItemFromCart = (item) => {
        const updatedItems = items.filter((i) => i !== item);
        setItems(updatedItems);
    };

    // Function to calculate the total price of all items in the cart
    const calculateTotalPrice = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItemFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
    );
};

export default Cart;