import { NavLink } from 'react-router-dom';
import {code as slugs} from './sample.code';
import { useState } from 'react';
import classes from './LeetPage.module.css';
const Sidebar = () => {

    const [links, setLinks] = useState(Object.keys(slugs));
    return (
        <div className={classes.sidebar}>
            <div className={classes['sidebar-internal']}>
                <ul>
                    {links.map(link => (
                        <li key={link}>
                            <NavLink 
                                to={`/leetpage/:${link}`}
                                className={({ isActive }) => isActive ? classes.active : undefined}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;