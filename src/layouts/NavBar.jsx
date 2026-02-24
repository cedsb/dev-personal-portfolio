import { useState } from "react" 
import { Link, NavLink } from "react-router"

import { FileDown, Menu, X } from "lucide-react"
import ThemeToggle from "../components/ThemeToggle.jsx"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

const navLinks = ({ direction = "horizontal", onLinkClick}) => {
  const layout = 
    direction === "horizontal"
      ? "flex gap-8 text-xl font-mono"
      : "flex flex-col items-center gap-6 text-lg font-mono"

  return (
    <div className={layout}>
      {navItems.map((item) => (
        <NavLink 
          key={item.path}
          to={item.path}
          onClick={onLinkClick}
          className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition"}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-primary-foreground dark:bg-primary-foreground py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="shrink-0">
              <Link aschild="true" to="/">
                <span className="font-mono font-bold text-2xl text-primary">Cedrick Steven</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              {navLinks({ direction: "horizontal" })}
            </div>

            {/* Theme & CTA */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="lg" className="font-mono text-xl bg-primary dark:bg-primary hover:bg-primary/60 gap-4 px-4">
                <FileDown data-icon="inline-start" className="size-6! text-primary-foreground dark:text-primary-foreground"/>
                <p className="text-primary-foreground dark:text-primary-foreground font-semibold">My Resume</p>
              </Button>
            </div>

            {/* Mobile Drawer */}
            <Drawer direction="bottom" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <Button className={`md:hidden transition-all duration-2000 ${isMenuOpen ? 'animate-iconMorph' : 'animate-iconMorph'}`} variant="icon" size="icon">
                  {isMenuOpen ? <X className="text-primary size-6!"/> : <Menu className="text-primary size-6!"/>}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="font-mono">
                <DrawerHeader>
                  <DrawerTitle className="text-primary">Navigation</DrawerTitle>
                  <DrawerDescription>Explore the site's sections.</DrawerDescription>
                </DrawerHeader>
                <div className="px-6 py-6 space-y-8">
                  {navLinks({ direction: "vertical", onLinkClick: () => setIsMenuOpen(false) })}
                  <div className="flex justify-center items-center gap-4 border-t pt-4 border-primary/40">
                    <ThemeToggle />
                    <Button variant="ghost" className="bg-primary hover:bg-primary/60">
                      <FileDown className="size-5! text-primary-foreground" />
                      <span className="text-primary-foreground">
                        My Resume
                      </span>
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
    </header>
  )
}
