import { NavigationBar } from '@/components/generic/NavigationBar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AuthProvider } from '@/context/AuthContext'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <AuthProvider>
      <div 
      // className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div 
        //className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 flex gap-2 text-lg border-b border-slate-700"
        >
          <NavigationBar />
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    </AuthProvider>
  )
}