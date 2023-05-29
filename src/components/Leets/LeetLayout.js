import { Outlet } from "react-router-dom";
import classes from './LeetPage.module.css';
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className={classes['leet-page-cont']}>
            <Sidebar />
            <div className={classes.leetsingle}>

                <Outlet />
            </div>
        </div>
    )
}

export default Layout;