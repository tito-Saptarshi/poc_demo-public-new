"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header({ title }: { title?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-[#4CAF50] rounded-lg p-4 flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        {title && (
          <>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          </>
        )}
        <h1 className="text-white text-xl md:text-2xl font-bold">{title || "LANDING PAGE"}</h1>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-white hover:bg-white/20"
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </header>
  )
}

export function AppHeader({ showBack = false, backHref = "/" }: { showBack?: boolean; backHref?: string }) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-border">
      {showBack && (
        <Link href={backHref} className="text-muted-foreground hover:text-foreground">
          ← Back
        </Link>
      )}
      <div className="flex items-center gap-3">
        <div className="w-14 h-14">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,90 5,90" fill="#4CAF50" />
            <text x="50" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              LEROY
            </text>
            <text x="50" y="60" textAnchor="middle" fill="#FFEB3B" fontSize="12" fontWeight="bold">
              MERLIN
            </text>
          </svg>
        </div>
        <div className="w-12 h-9 flex">
          <div className="w-1/3 bg-[#002B7F]"></div>
          <div className="w-1/3 bg-[#FCD116]"></div>
          <div className="w-1/3 bg-[#CE1126]"></div>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground ml-4">MagazinIQ</h1>
      </div>
    </div>
  )
}
