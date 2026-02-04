"use client"

import {
  Users,
  DollarSign,
  Percent,
  ShoppingCart
} from "lucide-react"

function Stat({
  icon,
  title,
  value,
  delta,
  negative
}: {
  icon: React.ReactNode
  title: string
  value: string
  delta: string
  negative?: boolean
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition flex justify-between items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="text-xl md:text-2xl font-semibold mt-1">{value}</h3>

        <span
          className={`text-sm font-medium ${
            negative ? "text-red-500" : "text-green-500"
          }`}
        >
          {delta}
        </span>
      </div>

      {/* ICON */}
      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
        {icon}
      </div>
    </div>
  )
}

export default function StatCard() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      
      <Stat
        icon={<Users size={20} />}
        title="Total Customers"
        value="1,02,890"
        delta="+40%"
      />

      <Stat
        icon={<DollarSign size={20} />}
        title="Total Revenue"
        value="$56,562"
        delta="+25%"
      />

      <Stat
        icon={<Percent size={20} />}
        title="Conversion Ratio"
        value="12.08%"
        delta="-12%"
        negative
      />

      <Stat
        icon={<ShoppingCart size={20} />}
        title="Total Deals"
        value="2,543"
        delta="+19%"
      />
    </div>
  )
}
