import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// const MainLayout = lazy(() => import('./layout/MainLayout'));
// const HomePage = lazy(() => import('./pages/HomePage'));

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';

const Projects = lazy(() => import('./pages/Projects'));
const Payment = lazy(() => import('./components/Payment'));
const Hooks = lazy(() => import('./pages/Hooks'));
const Materials = lazy(() => import('./pages/Materials'));
const CleanUp = lazy(() => import('./components/CleanUp'));
const RouteParams = lazy(() => import('./components/RouteParams'));
const Counter = lazy(() => import('./components/Counter'));
const FetchApi = lazy(() => import('./components/FetchApi'));
const UseEffectFetch = lazy(() => import('./components/UseEffectFetch'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const ScrollRestore = lazy(() => import('./components/ScrollRestore'));
const FormUseReducer = lazy(() => import('./components/FormUseReducer'));
const Activity = lazy(() => import('./components/ActivityDemo'));

// یک هلپر برای اینکه هر لیزی‌کامپوننت با یک الگوی یکسان Suspense بگیره
const withSuspense = (Component) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: withSuspense(HomePage) },
            { path: '/projects', element: withSuspense(Projects) },
            { path: '/projects/payment', element: withSuspense(Payment) },
            { path: '/projects/counter', element: withSuspense(Counter) },
            { path: '/projects/fetchApi', element: withSuspense(FetchApi) },
            { path: '/projects/uEffectFetch', element: withSuspense(UseEffectFetch) },
            { path: '/projects/RouteParams/:id?', element: withSuspense(RouteParams) },
            { path: '/projects/form', element: withSuspense(FormUseReducer) },
            { path: '/about', element: withSuspense(Hooks) },
            {
                path: '/materials',
                children: [
                    { index: true, element: withSuspense(Materials) },
                    { path: 'cleanup', element: withSuspense(CleanUp) },
                    { path: 'privateRoute', element: withSuspense(PrivateRoute) },
                    { path: 'scrollRestore', element: withSuspense(ScrollRestore) },
                    { path: 'Activity', element: withSuspense(Activity) },
                ],
            },
            {
                path: '*',
                element: withSuspense(NotFound),
                handle: { hideNav: true },
            },
        ],
    },
]);

export default router;