import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => Promise<void>
  error: string | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Check for stored auth token on mount
  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      // Mock authentication - accept any credentials
      const mockToken = `mock_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('auth_token', mockToken)
      localStorage.setItem('userEmail', email)
      setIsLoggedIn(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signup = async (email: string, password: string, name: string) => {
    setLoading(true)
    setError(null)
    try {
      // Mock authentication - accept any credentials
      const mockToken = `mock_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('auth_token', mockToken)
      localStorage.setItem('userEmail', email)
      localStorage.setItem('userName', name)
      setIsLoggedIn(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Signup failed'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    setError(null)
    try {
      // Mock logout - just clear localStorage
      localStorage.removeItem('auth_token')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userName')
      setIsLoggedIn(false)
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signup, logout, error, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
