import StackedAreaChart from '@/components/charts/StackedAreaChart'
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
        <div>
            <StackedAreaChart />
        </div>
    )
}
