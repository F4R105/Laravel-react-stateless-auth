import { 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from 'react'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const getUser = async () => {
        const authToken = localStorage.getItem('authToken')

        if (!authToken) {
            console.log('No token found. User is not authenticated.')
            return
        }

        try {
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });

            if (response.ok) {
                const userData = await response.json()
                return userData
            } else {
                console.error('Failed to get user data:', response.statusText)
            }
        } catch (error) {
            console.error('Network error:', error)
        }
    }

    const register = async (formData) => {
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            const data = await response.json()
            console.log('Registration successful:', data)
            localStorage.setItem('authToken', data.token)
            const user = await getUser()
            console.log('user ->', user)
            setUser(user)
        } else {
            const error = await response.json()
            console.error('Registration failed:', error)
        }
    }

    const login = async (formData) => {
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            const data = await response.json()
            localStorage.setItem('authToken', data.token)
            const user = await getUser()
            setUser(user)
        } else {
            const error = await response.json()
            console.error('Login failed:', error)
        }
    }

    const logout = async (formData) => {
        const response = await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            const data = await response.json()
            localStorage.removeItem('authToken')
            setUser(null)
            console.log('Logout successful:', data)
        } else {
            const error = await response.json()
            console.error('Logout failed:', error)
        }
    }

    const validateAuth = async () => {
        const user = await getUser();
        if (user){
            setUser(user)
            return
        }
    }

    useEffect(() => {
        validateAuth()
    }, [])

    return (
        <AuthContext.Provider value={{ register, login, logout, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    if (!AuthContext) {
        throw new Error('Use inside auth context provider')
    }

    return useContext(AuthContext);
}

export default useAuthContext