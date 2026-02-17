 "use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import logo from '@/money-mirror-logo-dark.png'

export const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>   
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/"><img src={logo} style={{ width: '30px', height: '50px' }}/></a>
          </NavigationMenuLink>
        </NavigationMenuItem>  
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/dashboard">Dashboard</a>
          </NavigationMenuLink>
        </NavigationMenuItem> 
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/about">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

