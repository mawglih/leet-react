import { Link } from 'react-router-dom';
import {code as slugs} from './sample.code';
import { useState } from 'react';
const Sidebar = () => {

    const [links, setLinks] = useState(Object.keys(slugs));
    return (
        <div className="sidebar">
            <ul>
                {links.map(link => <li><Link to="/Leetpage:slug">{link}</Link></li>)}
            </ul>
        </div>
    )
}

export default Sidebar;