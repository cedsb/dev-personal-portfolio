import { useState } from "react" 
import { Link } from "react-router"

import { FileDown, Menu, X } from "lucide-react"
import ThemeToggle from "../components/ThemeToggle.jsx"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-primary-foreground dark:bg-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="shrink-0">
              <span className="font-mono font-bold text-xl text-primary">Cedrick Steven</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex gap-8 text-lg font-mono">
              <Link to="/about" className="text-muted-foreground hover:text-primary">About</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary">Projects</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </div>

            {/* Theme & CTA */}
            <div className="hidden md:flex items-center gap-2">
              
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="sm" className="font-mono text-lg bg-primary dark:bg-primary hover:bg-primary/60">
                <FileDown data-icon="inline-start" className="text-primary-foreground dark:text-primary-foreground"/>
                <p className="text-primary-foreground dark:text-primary-foreground font-semibold">My Resume</p>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            {/* <Button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>

            </Button> */}

            <Drawer direction="down" className="hidden md:flex">
              <DrawerTrigger asChild>
                <Button variant="outline">Scrollable Content</Button>
              </DrawerTrigger>
              <DrawerContent className="">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="no-scrollbar overflow-y-auto px-4">
                  <p className="mb-4 leading-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <ThemeToggle />
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
    </header>
  )
}
