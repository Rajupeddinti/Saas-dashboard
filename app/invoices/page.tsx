"use client"

const invoices = [
  {
    id: "#INV-001",
    client: "Acme Corp",
    date: "Jan 12, 2026",
    amount: "$2,450",
    status: "Paid",
  },
  {
    id: "#INV-002",
    client: "TechNova",
    date: "Jan 18, 2026",
    amount: "$1,120",
    status: "Pending",
  },
  {
    id: "#INV-003",
    client: "CloudNet",
    date: "Jan 25, 2026",
    amount: "$3,780",
    status: "Overdue",
  },
]

export default function InvoicesPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Invoice Management</h1>
      <p>The invoice section allows users to manage and track all billing activities in one place. Users can create, view, edit, and monitor invoice statuses such as paid, pending, or overdue. This section ensures accurate financial tracking and helps maintain organized transaction records.
          
          Invoices display important details including client information, billing amounts, due dates, and payment status. The system helps users streamline payment processing, improve financial transparency, and maintain professional billing workflows.</p>

<p>By integrating automated tracking with visual insights, businesses can reduce manual effort, improve accuracy, and maintain complete financial transparency.</p>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Invoices</h1>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
          Create Invoice
        </button>
      </div>

      {/* Invoice Table */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="py-3">Invoice ID</th>
              <th>Client</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="border-t text-center hover:bg-gray-50"
              >
                <td className="py-3 font-medium">{inv.id}</td>
                <td>{inv.client}</td>
                <td>{inv.date}</td>
                <td>{inv.amount}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      inv.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : inv.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
