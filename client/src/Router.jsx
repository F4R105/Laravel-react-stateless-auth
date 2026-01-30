import Home from './pages/Home'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login />
    },
])

export default router