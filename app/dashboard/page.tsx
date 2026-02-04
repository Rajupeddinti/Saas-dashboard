"use client"

import Topbar from "@/components/Topbar"
import WelcomeCard from "@/components/welcomecard"
import StatCard from "@/components/StatCard"
import RevenueChart from "@/components/RevenueChart"
import LeadsChart from "@/components/LeadsChart"
import DealsTable from "@/components/DealsTable"
import RecentActivity from "@/components/RecentActivity"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Topbar />
      <WelcomeCard />
      <StatCard />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueChart />
        <LeadsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DealsTable />
        <RecentActivity/>
      </div>
    </div>
  )
}
