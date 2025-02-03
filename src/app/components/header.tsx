import React from "react"

import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

const Header: React.FC = () => {
  return (
    <header className="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <div className="hidden px-4 sm:block">
            <MainNav />
          </div>
          <div className="block sm:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
