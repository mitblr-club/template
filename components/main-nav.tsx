import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

const items: NavItem[] = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  // Add more items as needed
];



export function MainNav() {

  const items: NavItem[] = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    // Add more items as needed
  ];
  
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex justify-center items-center">
        <Icons.CodeX />
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-center text-sm font-medium text-muted-foreground xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
