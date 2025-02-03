import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="hover:text-primary text-sm font-medium transition-colors"
      >
        Home
      </Link>
      <Link
        href="/shadcn"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        shadcn
      </Link>
      <Link
        href="/shadcn-tasks"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        shadcn-tasks
      </Link>
      <Link
        href="/vaul"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        vaul
      </Link>
    </nav>
  )
}
