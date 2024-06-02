// src/Components/CartContext.js
import React, { createContext, useReducer, useEffect } from 'react';

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Initial state
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

// Reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

// Create context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
