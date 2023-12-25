"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="default" className="w-full">
          {theme?.toString()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-full" >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    // <Select>
    //   <SelectTrigger className="w-[180px]">
    //     <SelectValue placeholder="Dark" />
    //   </SelectTrigger>
    //   <SelectContent>
    //     <SelectGroup>
    //       <SelectItem value="system" onClick={() => setTheme('system')}>System</SelectItem>
    //       <SelectItem value="light" onClick={() => setTheme('light')}>Light</SelectItem>
    //       <SelectItem value="dark" onClick={() => setTheme('dark')}>Dark</SelectItem>
    //     </SelectGroup>
    //   </SelectContent>
    // </Select>
  )
}
