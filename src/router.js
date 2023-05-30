import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import LeetPage from "./components/Leets/LeetPage";
import Layout from "./MainNavigation/Layout";
import ErrorPage from "./components/ErrorPage";
import Leet from "./components/Leets/SingleLeet";
import LeetLayout from './components/Leets/LeetLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, path: '', element: <Home /> },
            { path: 'leetpage', element: <LeetPage /> },
            { 
                path: '/leetpage/:id', 
                element: <LeetLayout/>,
                children: [
                    { index: true, path: '', element: <Leet /> }
                ]
            },
        ],
    },
]);
