"use client"

import { useState } from "react"
import RevenueChart from "@/components/RevenueChart"
import LeadsChart from "@/components/LeadsChart"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

/* ---------------- DATA ---------------- */

const leadsData = [
  { name: "Mobile", value: 1624, color: "#6366F1" },
  { name: "Desktop", value: 1267, color: "#22C55E" },
  { name: "Laptop", value: 1153, color: "#FACC15" },
  { name: "Tablet", value: 679, color: "#EC4899" },
]


/* ---------------- PAGE ---------------- */

export default function Analytics() {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen text-gray-900">

      {/* PROJECT DESCRIPTION */}
      <div className="bg-gray-50 border rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Analytics Overview</h1>
        <div>
        <p>This dashboard provides a visual summary of business performance using bar and pie chart representations. The bar graph highlights trends and comparisons across different time periods, helping track growth, revenue distribution, and deal performance. It allows users to easily identify peak activity periods and performance gaps.</p>
        <p>Gain a comprehensive view of your business performance through intelligent, real-time analytics. Our advanced visualization tools transform complex data into meaningful insights, allowing teams to monitor growth patterns, customer behavior, and operational efficiency with confidence.

            The bar chart representation highlights performance trends across multiple time periods, enabling businesses to quickly identify growth opportunities, seasonal variations, and performance fluctuations. By comparing data across categories, teams can easily track progress against targets and optimize decision-making strategies.

           Meanwhile, the pie chart provides a clear breakdown of distribution metrics, offering an instant understanding of how different channels, sources, or customer segments contribute to overall performance. This visual segmentation helps businesses identify high-performing areas and uncover underutilized opportunities for expansion.</p>
          
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RevenueChart />
          <LeadsChart />
      </div>
      
    </div>
  )
}