"use client"

import Image from "next/image"
import { Pencil } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT MENU */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border p-4 space-y-3">
            {[
              "My Profile",
              "Password & Security",
              "Teams",
              "Team Member",
              "Notifications",
              "Billing",
              "Data Export",
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                  index === 0
                    ? "bg-indigo-100 text-indigo-600"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}

            <button className="text-red-500 text-sm mt-4">
              Delete Account
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-9 space-y-6">
          {/* PROFILE CARD */}
          <Card
            title="My Profile"
            action="Edit"
            content={
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/81"
                    alt="profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Raju peddinti</h3>
                    <p className="text-sm text-gray-500">
                      Web Designer
                    </p>
                    <p className="text-sm text-gray-400">
                      Andhra pradhesh, India
                    </p>
                  </div>
                </div>
              </div>
            }
          />

          {/* PERSONAL INFO */}
          <Card
            title="Personal Information"
            action="Edit"
            content={
              <InfoGrid
                items={[
                  ["First Name", "Raju"],
                  ["Last Name", "Peddinti"],
                  ["Email Address", "rajupeddinti@gmail.com"],
                  ["Phone", "+91 7659858771"],
                  ["Bio", "Web Designer"],
                ]}
              />
            }
          />

          {/* ADDRESS */}
          <Card
            title="Address"
            action="Edit"
            content={
              <InfoGrid
                items={[
                  ["Country", "India"],
                  ["City/State", "Vizag, Andhra Pradhesh"],
                  ["Postal Code", "ERT 2354"],
                  ["TAX ID", "AS4645756"],
                ]}
              />
            }
          />
        </div>
      </div>
    </div>
  )
}

/* ---------------- COMPONENTS ---------------- */

function Card({
  title,
  action,
  content,
}: {
  title: string
  action?: string
  content: React.ReactNode
}) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg">{title}</h2>

        {action && (
          <button className="flex items-center gap-2 text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-100 transition">
            <Pencil size={14} />
            {action}
          </button>
        )}
      </div>

      {content}
    </div>
  )
}

function InfoGrid({ items }: { items: string[][] }) {
  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-10">
      {items.map(([label, value], i) => (
        <div key={i}>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      ))}
    </div>
  )
}
