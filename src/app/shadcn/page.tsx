"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DataTableDemo } from "./components/data-table-demo";

export default function ShadcnPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Shadcn Page</h1>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <DataTableDemo />
    </div>
  );
}
