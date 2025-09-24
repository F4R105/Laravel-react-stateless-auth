import React from 'react'
import useNavigationContext from './contexts/NavigationContext'
import Home from './pages/Home'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function Router() {
    const { currentPage } = useNavigationContext()

    switch (currentPage) {
        case 'home':
            return <Home />
        case 'login':
            return <Login />
        case 'register':
            return <Register />
        case 'dashboard':
            return <Dashboard />
        default:
            return <Home />
    }
}

export default Router