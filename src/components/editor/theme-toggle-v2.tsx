"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button size='icon' variant='outline' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {
        theme === 'dark'
          ? (
            <Sun />
          ) : (
            <Moon />
          )
      }
    </Button>

  )
}
