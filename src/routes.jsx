import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Payment from './pages/Payment';
import Hooks from './pages/Hooks';
import Materials from './pages/Materials';
import CleanUp from './components/CleanUp';
import RouteParams from './components/RouteParams';

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <MainLayout />,
        children : [
            {
                index :true,
                element : <HomePage />
            },
            {
                path : '/projects',
                element :<Projects />
            },
            {
                path : '/projects/payment',
                element : <Payment />
            },
            {
                path : '/about' ,
                element : <Hooks />
            },
            {
                path : '/materials' ,
                element : <Materials />
            },
            {
                path : '/materials/cleanup' ,
                element : <CleanUp />
            },
            {
                path : '/projects/RouteParams/:id?',
                element : <RouteParams />
            }
        ]
    },
])

export default router;