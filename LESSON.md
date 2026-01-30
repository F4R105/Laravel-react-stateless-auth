import './App.css'
import { AuthContextProvider } from './contexts/AuthContext'
import router from './Router'
import { RouterProvider } from 'react-router'

function App() {

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App

When router needs access to authentication state, but your AuthContextProvider also needs the router, this is called **Circular dependency**. This happens often when you want to protect routes based on auth state but also want to redirect or navigate inside your auth logic. The solution is to se useNavigate inside components, not inside the provider.Instead of making your AuthContextProvider depend directly on the router, keep it pure. Let components that consume the context handle navigation: