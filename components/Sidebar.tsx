"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

import {
  LayoutDashboard,
  BarChart3,
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

const links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/Analytics", icon: BarChart3 },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Sales", href: "/sales", icon: Users },
  { name: "Invoices", href: "/invoices", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const pathname = usePathname()

  // Sidebar Content
  const SidebarContent = () => (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        {!collapsed && (
          <h1 className="text-xl font-semibold">SaaS Dashboard</h1>
        )}

        {/* Desktop Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:block p-1 rounded hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>

        {/* Mobile Close */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1 rounded hover:bg-gray-100"
        >
          <X />
        </button>
      </div>

      {/* NAV */}
      <nav className="space-y-2">
        {links.map(({ name, href, icon: Icon }) => {
          const active = pathname === href

          return (
            <Link
              key={name}
              href={href}
              onClick={() => setMobileOpen(false)}
            >
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
                ${
                  active
                    ? "bg-indigo-100 text-indigo-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />

                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {name}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          )
        })}
      </nav>
    </>
  )

  return (
    <>
      {/* MOBILE TOP BAR BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        <Menu />
      </button>

      {/* DESKTOP SIDEBAR */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 250 }}
        className="hidden lg:flex h-screen bg-white border-r p-4 flex-col"
      >
        <SidebarContent />
      </motion.aside>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 w-64 h-screen bg-white z-50 p-4"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
