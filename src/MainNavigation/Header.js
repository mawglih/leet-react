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
                            to='leet1'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Leets 1-50
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='leet2'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Leets 51-100
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
