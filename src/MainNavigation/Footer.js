import { Link } from 'react-router-dom';
import classes from './Layout.module.css';
const Footer = () => {
    return (
        <header className={classes.footer}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to='/leet1'>Leet 1-50</Link>
                    </li>
                    <li>
                        <Link to='/leet2'>Leet 51-100</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Footer;