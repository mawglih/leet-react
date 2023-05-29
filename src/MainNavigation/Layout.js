import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import classes from './Layout.module.css';

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={classes.content}>
                <Outlet />
            </main>
            
            <Footer/> 
        </>
    )
}

export default Layout;