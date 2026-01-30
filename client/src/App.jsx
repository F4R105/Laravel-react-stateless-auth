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
