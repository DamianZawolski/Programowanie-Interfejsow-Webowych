import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.svg'
import { logout, useUser } from '../connections/userService';

const Nav = () => {
    const user = useUser();

    return (
        <nav className="fixed-navigation">
            <img className="logo" src={logo} alt="logo" />
            <ul className="nav-links">
                <li>
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="/browse">
                        Offers
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="/chat" >
                        Chat
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="/cart">
                        Cart
                    </a>
                </li>
                {!!user || <NavLink to="/login" className="button primary">Login</NavLink>}
                {!!user && <button className="button primary" onClick={logout}>Log out {user?.displayName}</button>}
            </ul>
            <button className="button primary hidden">Menu</button>
        </nav>
    );
};

export default Nav;