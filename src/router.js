import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeetPage from "./components/Leets/LeetPage";
const RenderRouter = () => {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route path="/LeetPage" element={<LeetPage />}/>
                    </Route>
                </Routes>
            <Footer />
        </>
    )

    
}

export default RenderRouter;