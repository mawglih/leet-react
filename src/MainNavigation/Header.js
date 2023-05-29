import { NavLink } from "react-router-dom";
import classes from './Layout.module.css';
const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/leetpage'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            LeetPage
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
