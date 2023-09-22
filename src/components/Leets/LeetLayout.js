import { Outlet } from "react-router-dom";
import classes from './LeetPage.module.css';
import Sidebar from "./Sidebar";
import SearchBar from "../Search/SearchBar";

const Layout = ({
    onSearchChange,
    search
}) => {
    return (
        <div>
            <SearchBar 
                onchange={onSearchChange}
                inputValue={search}
                labelText={"search by keyword"}
            />
            <SearchBar 
                onchange={onSearchChange}
                inputValue={search}
                labelText={"search by name"}
            />
        <div className={classes['leet-page-cont']}>

            <Sidebar />
            <div className={classes.leetsingle}>

                <Outlet />
            </div>
        </div>
        </div>
    )
}

export default Layout;