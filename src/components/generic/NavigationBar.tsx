import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import logo from '@/money-mirror-logo-dark.png'
import { ChartColumn } from 'lucide-react';
import { UserMenu } from './UserMenu'
import { useAuth } from '@/context/AuthContext'

export const NavigationBar = () => {
  const { isLoggedIn } = useAuth()

  return (
    <div className="flex items-center justify-between w-full">
      <NavigationMenu>
        <NavigationMenuList>   
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><ChartColumn className="h-6 w-6 text-primary"/><span className="font-bold text-xl">MoneyMirror</span></a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {isLoggedIn && (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/dashboard" className="text-white hover:text-blue-400 transition">Dashboard</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/link-account" className="text-white hover:text-blue-400 transition">Link Account</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          )}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/about" className="text-white hover:text-blue-400 transition">About</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <UserMenu />
    </div>
  )
}