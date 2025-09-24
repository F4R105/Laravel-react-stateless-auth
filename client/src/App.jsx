import './App.css'
import { AuthContextProvider } from './contexts/AuthContext'
import { NavigationContextProvider } from './contexts/NavigationContext'
import Router from './Router'

function App() {

  return (
    <NavigationContextProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </NavigationContextProvider>
  )
}

export default App
