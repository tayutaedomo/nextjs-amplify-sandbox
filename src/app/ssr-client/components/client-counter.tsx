"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export default function ClientComponent() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("ClientComponent is mounted.")
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}
