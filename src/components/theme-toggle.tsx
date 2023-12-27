"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export default function ThemeToggle() {
  const { setTheme } = useTheme()

  return (

    <ToggleGroup className="w-full" variant='outline' type="single" onValueChange={(theme: string) => setTheme(theme)
    }>
      <ToggleGroupItem value="dark" aria-label="Toggle Dark" className="w-1/2">
        Dark
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Toggle Light" className="w-1/2">
        Light
      </ToggleGroupItem>
    </ToggleGroup>

  )
}
