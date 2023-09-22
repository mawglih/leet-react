import { NavLink, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './LeetPage.module.css';
const Sidebar = () => {
    const slugs = useLoaderData();
    const [links, setLinks] = useState([]);
    useEffect(() => {
        setLinks(Object.keys(slugs));
    }, [slugs]);
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