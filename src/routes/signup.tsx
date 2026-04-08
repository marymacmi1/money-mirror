import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuth } from '@/context/AuthContext'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/signup')({
  component: SignupComponent,
})

function SignupComponent() {
  const { signup, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // If already logged in, redirect immediately
    if (localStorage.getItem('auth_token')) {
      navigate({ to: '/dashboard' })
    }
  }, [navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    setLoading(true)
    try {
      await signup(email, password, name)
      navigate({ to: '/dashboard' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={loading || authLoading}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading || authLoading}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={loading || authLoading}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
              placeholder="••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              disabled={loading || authLoading}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
              placeholder="••••••"
            />
          </div>
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
          <Button 
            type="submit" 
            disabled={loading || authLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 disabled:opacity-50"
          >
            {loading || authLoading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm mb-2">Already have an account?</p>
          <button
            onClick={() => navigate({ to: '/login' })}
            className="text-blue-400 hover:text-blue-300 transition font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}