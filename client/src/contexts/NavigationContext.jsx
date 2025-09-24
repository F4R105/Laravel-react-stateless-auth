import React, { createContext, useContext, useState } from 'react'

const NavigationContext = createContext()

export function NavigationContextProvider({ children }) {
    const [currentPage, setCurrentPage] = useState('home')

    const navigateTo = (page) => setCurrentPage(page);

    return (
        <NavigationContext.Provider value={{ currentPage, navigateTo }}>
            {children}
        </NavigationContext.Provider>
    )
}

export const useNavigationContext = () => {
    if (!NavigationContext) {
        throw new Error('Use inside navigation context provider')
    }

    return useContext(NavigationContext);
}

export default useNavigationContext