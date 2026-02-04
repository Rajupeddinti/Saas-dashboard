"use client"

import { ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react"

export default function Sales() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-indigo-600 font-medium">
          Sales Analytics for Modern SaaS
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Track Sales, Revenue & Growth <br />
          <span className="text-indigo-600">All in One Dashboard</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          A powerful analytics platform designed to help business teams monitor
          sales performance, customer growth, and revenue trends — without
          complexity.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center gap-2">
            Start Free Trial <ArrowRight size={18} />
          </button>
          <button className="px-6 py-3 border rounded-lg">
            View Demo
          </button>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="bg-[#F7F8FC] py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <Stat title="Active Customers" value="102,890+" />
          <Stat title="Revenue Tracked" value="$56M+" />
          <Stat title="Monthly Growth" value="48%" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">
          Everything you need to scale sales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Feature
            icon={<BarChart3 />}
            title="Revenue Analytics"
            desc="Visualize monthly, quarterly, and yearly revenue with clean, interactive charts."
          />
          <Feature
            icon={<Users />}
            title="Customer Growth"
            desc="Track customer acquisition trends and conversion ratios in real-time."
          />
          <Feature
            icon={<TrendingUp />}
            title="Sales Performance"
            desc="Monitor deals, leads by device, and sales funnel performance effortlessly."
          />
        </div>
      </section>

      {/* DATA PREVIEW */}
      <section className="bg-[#F7F8FC] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Real insights. Real impact.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataCard label="Monthly Revenue" value="$6,700" />
            <DataCard label="Conversion Rate" value="12.08%" />
            <DataCard label="Deals Closed" value="2,543" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to turn data into growth?
        </h2>
        <p className="mt-4 text-gray-600">
          Join thousands of businesses using our analytics to make smarter sales decisions.
        </p>

        <button className="mt-8 px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg">
          Get Started Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © 2026 SaaS Analytics Dashboard. All rights reserved.
      </footer>
    </div>
  )
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  )
}

function DataCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}
