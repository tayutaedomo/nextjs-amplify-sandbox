"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import { DataTableDemo } from "./data-table-demo"

export default function Contents() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Shadcn Page</h1>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <DataTableDemo />
    </div>
  )
}
