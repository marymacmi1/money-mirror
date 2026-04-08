import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingDown, Eye, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            See Your Debt Clearly
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8">
            Consolidate all your debt in one place. Visualize your financial picture. Take control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={() => {
          navigate({
            to: '/signup',
          })
        }}
        size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button onClick={() => {
          navigate({
            to: '/about',
          })
        }} size="lg" variant="outline" className="bg-slate-700 hover:bg-slate-600 text-white border-slate-600 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <Eye className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">All in One View</h3>
              <p className="text-slate-400">See all your debts aggregated across credit cards, student loans, mortgages, and more</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <TrendingDown className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Smart Projections</h3>
              <p className="text-slate-400">See the impact of different payment strategies on your debt payoff timeline</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Take Action</h3>
              <p className="text-slate-400">Make informed decisions about your debt with real-time visualizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-800/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            How Money Mirror Works
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Create Your Account</h3>
                <p className="text-slate-400">Sign up and set up your profile in minutes with secure authentication</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Link Your Accounts</h3>
                <p className="text-slate-400">Connect your credit cards, student loans, mortgages, and other debts securely</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Visualize Your Debt</h3>
                <p className="text-slate-400">View all your debts aggregated in intuitive charts and dashboards</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Explore Payment Options</h3>
                <p className="text-slate-400">Simulate different payment strategies and see your path to financial freedom</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Debt?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join thousands of people who are visualizing and managing their debt smarter.
          </p>
          <Button onClick={() => navigate({ to: '/signup' })} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Start Your Free Account <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}