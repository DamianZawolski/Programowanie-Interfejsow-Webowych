import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import BrowsePage from "./Pages/BrowsePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Chat from "./Chat/Chat";
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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />   
            <Route path="/sign-up" element={<SignUp />} />
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
        <div>
            <Nav />
            <Outlet id="outlet" context={[offers, setOffers]} />
        </div>
    );
}

const App = () => <RouterProvider router={router} />;

export default App;
