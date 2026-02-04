import './globals.css'
import Sidebar from '../components/Sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50 min-h-screen">
        {/* Sidebar is fixed for all pages */}
        <Sidebar />

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  )
}
