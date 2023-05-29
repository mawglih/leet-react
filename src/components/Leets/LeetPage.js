import Sidebar from "./Sidebar";
import Leet from "./SingleLeet";

const LeetPage = () => {
    return (
        <div>
            LeetPage. Table of Contents
            <h2>Leet numbers</h2>
            <ul>
                <li>Leets links</li>
            </ul>
            <div className="leet-page-cont">
                <Sidebar/>
                <Leet/>
            </div>
            
        </div> 
    )
}

export default LeetPage;