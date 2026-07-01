import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Payment from './pages/Payment';
import Hooks from './pages/Hooks';
import Materials from './pages/Materials';
import CleanUp from './components/CleanUp';
import RouteParams from './components/RouteParams';
import Counter from './components/Counter';
import FetchApi from './components/FetchApi';
import UseEffectFetch from './components/UseEffectFetch';
import NotFound from './pages/NotFound';

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
                path : '/projects/counter',
                element : <Counter />
            },
            {
                path : '/projects/fetchApi',
                element : <FetchApi />
            },
            {
                path : '/projects/uEffectFetch',
                element : <UseEffectFetch />
            },
            {
                path : '/projects/RouteParams/:id?',
                element : <RouteParams />
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
                path :'*',
                element : <NotFound />,
                handle : { hideNav : true }
            },
            
        ]
    },
])

export default router;