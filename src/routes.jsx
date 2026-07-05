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
import PrivateRoute from './pages/PrivateRoute';
import ScrollRestore from './pages/ScrollRestore';
import FormUseReducer from './pages/FormUseReducer'

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
                path : '/projects/form',
                element : <FormUseReducer />
            },
            {
                path : '/about' ,
                element : <Hooks />
            },
            {
                path : '/materials' ,
                children : [

                    {
                        index :true,
                        element : <Materials />
                    },
                    {
                        path : '/materials/cleanup' ,
                        element : <CleanUp />
                    },
                    {
                        path : '/materials/privateRoute' ,
                        element : <PrivateRoute />
                    },
                    {
                        path : '/materials/scrollRestore' ,
                        element : <ScrollRestore />
                    }
                ]
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