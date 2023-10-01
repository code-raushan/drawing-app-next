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
import { Context } from "@/utils/Context"

export function ModeToggle() {
    const { setTheme } = useTheme();
    const {setEraserColor} = React.useContext(Context);

    return (
        <div className="mt-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => {
                            setTheme("light");
                            setEraserColor("#ffffff");
                    }}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                        setTheme("dark");
                        setEraserColor("#020817")
                    }}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                        setTheme("system");
                        setEraserColor("#ffffff");
                    }}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
