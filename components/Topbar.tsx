"use client"

import { Bell } from "lucide-react"

export default function Topbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

      {/* SEARCH */}
      <div className="relative w-full sm:w-72">
        <input
          type="text"
          placeholder="Search analytics..."
          className="w-full px-4 py-2 text-sm rounded-full border bg-white focus:outline-none"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center justify-between sm:justify-end gap-3">

        {/* NOTIFICATION */}
        <button className="p-2 rounded-full border bg-white hover:bg-gray-100 transition">
          <Bell size={18} />
        </button>

        {/* USER */}
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-9 h-9 rounded-full"
          />

          <div className="text-sm leading-tight hidden sm:block">
            <p className="font-medium">Raju Peddinti</p>
            <p className="text-xs text-gray-500">Web Designer</p>
          </div>
        </div>

      </div>
    </div>
  )
}
