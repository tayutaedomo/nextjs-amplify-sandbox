import React from "react"

import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

const Header: React.FC = () => {
  return (
    <header className="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav className="hidden sm:block" />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
