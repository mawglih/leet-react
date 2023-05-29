import LeetCards from "./LeetCards";
import Sidebar from "./Sidebar";
import classes from './LeetPage.module.css';

const LeetPage = () => {
    return (
        <div>

            <div className={classes['leet-page-cont']}>
                <Sidebar/>
                <LeetCards />
            </div>
            
        </div> 
    )
}

export default LeetPage;