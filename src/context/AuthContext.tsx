import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  login: (email: string, password: string) => void
  signup: (email: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check for stored auth state on mount
  useEffect(() => {
    const stored = localStorage.getItem('isLoggedIn')
    if (stored === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const login = (email: string, password: string) => {
    // Simple validation
    if (email && password) {
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', email)
    }
  }

  const signup = (email: string, password: string) => {
    // Simple validation
    if (email && password) {
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', email)
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
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
