"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mobile", value: 1624, color: "#6366F1" },
  { name: "Desktop", value: 1267, color: "#34D399" },
  { name: "Laptop", value: 1153, color: "#FACC15" },
  { name: "Tablet", value: 679, color: "#F472B6" },
]

const total = data.reduce((acc, item) => acc + item.value, 0)

export default function LeadsBySource() {
  const [count, setCount] = useState(0)

  /* Counter Animation */
  useEffect(() => {
    let start = 0
    const duration = 900
    const increment = total / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= total) {
        setCount(total)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border w-full">
      <h3 className="font-semibold mb-6">Leads By Source</h3>

      {/* ✅ Responsive Container */}
      <div className="flex flex-col md:flex-col items-center justify-between gap-4">

        {/* ---------- Chart ---------- */}
        <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[230px] lg:h-[230px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                isAnimationActive
                animationDuration={900}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Counter */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Total Leads
            </p>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
              {count.toLocaleString()}
            </h2>
          </div>
        </div>

        {/* ---------- Legend ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-3 text-sm">
          {data.map((item) => (
            <LegendItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Legend Item ---------- */

function LegendItem({ item }: any) {
  return (
    <div className="flex items-center justify-between gap-3 min-w-[140px]">
      <div className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        <span className="text-gray-600">{item.name}</span>
      </div>

      <span className="font-semibold">
        {item.value.toLocaleString()}
      </span>
    </div>
  )
}
