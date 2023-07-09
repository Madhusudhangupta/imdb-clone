"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBox() {
    const router = useRouter()
    const [search, setSearch ] = useState("")
 
    function handleSubmit(e) {
        e.preventDefault()
        if(!search) {
            return
        }
        router.push(`/search/${search}`)
    }

  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5" onSubmit={handleSubmit}>
        <input 
            value={search}
            type="text" 
            placeholder="Search movie here..."
            className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
            onChange={(e) => setSearch(e.target.value)} />
        <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">Search</button>
    </form>
  )
}
