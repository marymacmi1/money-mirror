import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useLocation } from '@tanstack/react-router'

export const UserMenu = () => {
  const { isLoggedIn, logout } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const userEmail = localStorage.getItem('userEmail')
  const navigate = useNavigate()
  const location = useLocation()

  if (!isLoggedIn) {
    return (
      <Button
        onClick={() => {
          navigate({
            to: '/login',
            search: { redirect: location.pathname + location.search },
          })
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Login
      </Button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition"
      >
        <User size={20} />
        <span className="text-sm">{userEmail}</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-700 rounded shadow-lg border border-slate-600 z-40">
          <button
            onClick={() => {
              logout()
              setIsDropdownOpen(false)
            }}
            className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-slate-600 transition text-left"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}