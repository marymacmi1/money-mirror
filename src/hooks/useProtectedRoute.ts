import { useAuth } from '@/context/AuthContext'
import { useNavigate, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const useProtectedRoute = () => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        navigate({
          to: '/login',
          search: { redirect: location.pathname + location.search },
        })
      }, 0)
      return () => clearTimeout(timer)
    }
    setIsChecking(false)
  }, [isLoggedIn, navigate, location.pathname, location.search])

  return isLoggedIn && !isChecking
}