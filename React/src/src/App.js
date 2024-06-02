import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import BrowsePage from "./Pages/BrowsePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Chat from "./Chat/Chat";
import Cart from "./Pages/Cart";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";

import { readOffers } from "./connections/hotelsService";
import { useUser } from "./connections/userService";
import { CartProvider } from "./Components/CartContext"; // Import CartProvider

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    )
);

function AppLayout() {
    const [offers, setOffers] = useState([]);
    const user = useUser();

    useEffect(() => {
        readOffers().then((docs) => setOffers(docs));
    }, [user]);

    return (
        <CartProvider>
            <div>
                <Nav />
                <Outlet id="outlet" context={[offers, setOffers]} />
            </div>
        </CartProvider>
    );
}

const App = () => <RouterProvider router={router} />;

export default App;
