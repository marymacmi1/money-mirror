import { createFileRoute } from '@tanstack/react-router'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import { CreditCard, Building2, Zap, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export const Route = createFileRoute('/link-account')({
  component: RouteComponent,
})

function RouteComponent() {
  const isAuthorized = useProtectedRoute()
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)

  if (!isAuthorized) {
    return null
  }

  const accounts = [
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: CreditCard,
      description: 'Connect your credit card accounts',
      color: 'bg-blue-500/10 border-blue-500/30',
    },
    {
      id: 'bank',
      name: 'Bank Account',
      icon: Building2,
      description: 'Link your bank accounts',
      color: 'bg-green-500/10 border-green-500/30',
    },
    {
      id: 'klarna',
      name: 'Klarna',
      icon: Zap,
      description: 'Connect your Klarna account',
      color: 'bg-purple-500/10 border-purple-500/30',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {!selectedAccount ? (
          <>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">Link Your Accounts</h1>
              <p className="text-slate-400">
                Connect your financial accounts to track all your debts in one place
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {accounts.map((account) => {
                const Icon = account.icon
                return (
                  <button
                    key={account.id}
                    onClick={() => setSelectedAccount(account.id)}
                    className={`text-left p-6 rounded-lg border transition hover:border-opacity-100 hover:bg-opacity-20 ${account.color}`}
                  >
                    <Icon className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{account.name}</h3>
                    <p className="text-sm text-slate-400 mb-4">{account.description}</p>
                    <div className="flex items-center gap-2 text-blue-400">
                      <span className="text-sm font-medium">Connect</span>
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                )
              })}
            </div>
          </>
        ) : (
          <LinkAccountForm
            accountType={selectedAccount}
            onBack={() => setSelectedAccount(null)}
          />
        )}
      </div>
    </div>
  )
}

interface LinkAccountFormProps {
  accountType: string
  onBack: () => void
}

function LinkAccountForm({ accountType, onBack }: LinkAccountFormProps) {
  const [accountName, setAccountName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [balance, setBalance] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const getAccountLabel = () => {
    switch (accountType) {
      case 'credit-card':
        return 'Credit Card'
      case 'bank':
        return 'Bank Account'
      case 'klarna':
        return 'Klarna Account'
      default:
        return 'Account'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!accountName || !balance) {
      setError('Please fill in all required fields')
      return
    }

    // Simulate account linking
    setSuccess(true)
    setTimeout(() => {
      setAccountName('')
      setAccountNumber('')
      setBalance('')
      setInterestRate('')
      setSuccess(false)
      onBack()
    }, 2000)
  }

  return (
    <>
      <button
        onClick={onBack}
        className="text-slate-400 hover:text-white transition mb-6 flex items-center gap-2"
      >
        ← Back to accounts
      </button>

      <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Link {getAccountLabel()}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Account Nickname *
            </label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              placeholder="e.g., Chase Sapphire"
            />
          </div>

          {accountType === 'credit-card' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Last 4 Digits
              </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value.slice(0, 4))}
                maxLength={4}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                placeholder="1234"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Current Balance $ *
            </label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              placeholder="0.00"
              step="0.01"
            />
          </div>

          {(accountType === 'credit-card' || accountType === 'klarna') && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Interest Rate (Annual %)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                placeholder="0.00"
                step="0.01"
              />
            </div>
          )}

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-500/20 border border-green-500/50 rounded p-3">
              <p className="text-green-400 text-sm">Account linked successfully!</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
          >
            Link Account
          </Button>
        </form>
      </div>
    </>
  )
}