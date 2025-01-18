"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ShadcnPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Shadcn Page</h1>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
