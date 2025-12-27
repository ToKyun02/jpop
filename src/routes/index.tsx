import RootLayout from '@/RootLayout';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{ index: true, element: <Home /> }],
    },
]);

export default router;
