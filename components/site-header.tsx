import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import IconList from "./iconlist"
import { ThemeToggle } from "./theme-toggle"
import SiteSheet from "./site-sheet"


export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
        <div className="xs:hidden lg:block">
        <IconList />
        </div>
        <ThemeToggle />
        <SiteSheet />
        </div>
      </div>
    </header>
  )
}
