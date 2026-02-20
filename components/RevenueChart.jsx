"use client"

import React, { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

/* ---------------- DATA ---------------- */

const monthlyData = [
  { m: "Jan", v: 3200 },
  { m: "Feb", v: 4800 },
  { m: "Mar", v: 4200 },
  { m: "Apr", v: 6000 },
  { m: "May", v: 3800 },
  { m: "Jun", v: 5200 },
  { m: "Jul", v: 2800 },
  { m: "Aug", v: 4900 },
  { m: "Sep", v: 4100 },
  { m: "Oct", v: 6800 },
  { m: "Nov", v: 4500 },
  { m: "Dec", v: 3100 },
]

const quarterlyData = [
  { m: "Q1", v: 12200 },
  { m: "Q2", v: 15000 },
  { m: "Q3", v: 11800 },
  { m: "Q4", v: 14400 },
]

const yearlyData = [
  { m: "2023", v: 42000 },
  { m: "2024", v: 53400 },
  { m: "2025", v: 61200 },
]

/* ---------------- COMPONENT ---------------- */

export default function RevenueChart() {
  const [view, setView] = useState("month")

  const colors = ["#6366F1", "#22c55ea0", "#facc157d", "#ec489a6d"]

  const chartData =
    view === "quarter"
      ? quarterlyData
      : view === "year"
      ? yearlyData
      : monthlyData

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border w-full col-span-2">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">

        <div>
          <h3 className="font-semibold text-gray-800">
            Revenue Analytics
          </h3>
          <p className="text-xs text-gray-400">
            Sales vs Profit Insights
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-2">
          {["month", "quarter", "year"].map((type) => (
            <button
              key={type}
              onClick={() => setView(type)}
              className={`text-xs px-3 py-1 rounded-full capitalize transition
                ${
                  view === type
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-500 hover:bg-gray-100"
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barCategoryGap="20%">
            <XAxis
              dataKey="m"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={true}
              tickLine={true}
            />

            <YAxis
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={true}
              tickLine={true}
            />

            <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />

            <Bar
              dataKey="v"
              radius={[6, 6, 0, 0]}
              animationDuration={800}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}