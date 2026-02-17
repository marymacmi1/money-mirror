import StackedAreaChart from '@/components/charts/StackedAreaChart'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/dashboard')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <StackedAreaChart />
        </div>
    )
}
