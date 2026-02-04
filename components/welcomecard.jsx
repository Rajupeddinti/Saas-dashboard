"use client"

import { ArrowUpRight } from "lucide-react"

export default function WelcomeCard() {
  const progress = 48
  const radius = 55
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (circumference * progress) / 100

  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-indigo-400 dark:from-indigo-600 dark:to-indigo-500 rounded-2xl p-6 text-white flex justify-between overflow-hidden">
      
      {/* LEFT */}
      <div>
        <h2 className="text-2xl font-semibold">
          Welcome back, Raju Peddinti!
        </h2>
        <p className="text-sm opacity-90 mt-1">
          You have completed {progress}% of your monthly target.
        </p>
        <button  className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:scale-105 transition">
          <ArrowUpRight size={16} /><a href = "/Analytics" >View Analytics</a> 
        </button>
      </div>

      {/* RIGHT – PROGRESS */}
      <div className="relative w-32 h-32">
        <svg
          className="-rotate-90"
          width="130"
          height="130"
        >
          {/* BACKGROUND CIRCLE */}
          <circle
            cx="65"
            cy="65"
            r={radius}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="10"
            fill="none"
          />

          {/* PROGRESS CIRCLE */}
          <circle
            cx="65"
            cy="65"
            r={radius}
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
          {progress}%
        </div>
      </div>
    </div>
  )
}
