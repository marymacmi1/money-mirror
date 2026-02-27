import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { useAuth } from '@/context/AuthContext'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'


export const Route = createFileRoute('/login')({
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => ({
    redirect: (search.redirect as string) || undefined,
  }),
  component: LoginComponent,
})

function LoginComponent() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const search = useSearch({ from: '/login' })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // If already logged in, redirect immediately
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate({ to: search.redirect || '/' })
    }
  }, [navigate, search.redirect])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    login(email, password)
    navigate({ to: search.redirect || '/' })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              placeholder="••••••"
            />
          </div>
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
