import StackedAreaChart from '@/components/charts/StackedAreaChart'
import SimpleLineChart from '@/components/charts/SimpleLineChart'
import GroupedBarChart from '@/components/charts/GroupedBarChart'
import DebtBreakdownPieChart from '@/components/charts/DebtBreakdownPieChart'
import { createFileRoute } from '@tanstack/react-router'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const isAuthorized = useProtectedRoute()

  if (!isAuthorized) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Debt Stacked Area
            </h2>
            <StackedAreaChart />
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Monthly Balance Trend
            </h2>
            <SimpleLineChart />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Payment Composition
            </h2>
            <GroupedBarChart />
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Debt Breakdown
            </h2>
            <DebtBreakdownPieChart />
          </div>
        </div>
      </div>
    </div>
  )
}