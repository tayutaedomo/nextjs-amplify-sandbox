"use client"

import { Drawer } from "vaul"

import { Button } from "@/registry/new-york/ui/button"

export default function VaulPage() {
  return (
    <div>
      <h1 className="text-xl">Vaul Sandbox</h1>

      <Drawer.Root>
        <Drawer.Trigger className="relative flex h-10 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]">
          Open Drawer
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed inset-x-0 bottom-0 h-fit bg-gray-100 outline-none">
            <div className="bg-white p-4">
              <h2>Drawer Content</h2>
              <Drawer.Close>
                <Button>Close Drawer</Button>
              </Drawer.Close>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  )
}
