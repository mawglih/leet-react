import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Layout from "./MainNavigation/Layout";
import ErrorPage from "./components/ErrorPage";
import Leet from "./components/Leets/SingleLeet";
import LeetLayout from './components/Leets/LeetLayout';
import {code as data1} from './data/code.1.50';
import {code as data2} from './data/code.51.100';
import Leet1 from './pages/Leet1';

const loadDataLeet1 = () => data1;
const loadDataLeet2 = () => data2;

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, path: '', element: <Home /> },
            { path: 'leet1', element: <Leet1 />, loader: () => data1 },
            { path: 'leet2', element: <Leet1/>, loader: () => data2 },
            { 
                path: '/leetpage/:id', 
                element: <LeetLayout/>,
                children: [
                    { index: true, path: '', element: <Leet /> }
                ],
            },        
        ],
    },
]);
