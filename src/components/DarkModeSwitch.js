"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme==="system" ? systemTheme : theme
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => setMounted(true), [])

  return (
    <>
        {mounted && (
            currentTheme === "dark" ? (
                <MdOutlineLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={()=> setTheme("light")} />
            ) : (
                <MdDarkMode className="text-xl cursor-pointer hover:text-amber-500" onClick={()=> setTheme("dark")} />
            )
        )}
    </>
  )
}
