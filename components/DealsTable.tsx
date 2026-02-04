"use client"

const data = [
  {
    name: "Mayor Kelly",
    email: "mayorkelly@email.com",
    category: "Manufacture",
    location: "GERMANY",
    date: "Sep 15 - Oct 12",
    status: "Active",
  },
  {
    name: "Andrew Garfield",
    email: "andrewgarl@email.com",
    category: "Development",
    location: "CANADA",
    date: "Apr 10 - Dec 12",
    status: "Inactive",
  },
  {
    name: "Simon Cowell",
    email: "simoncowe@email.com",
    category: "Service",
    location: "EUROPE",
    date: "Sep 15 - Oct 12",
    status: "Active",
  },
]

export default function DealsTable() {
  return (
    <div className="bg-white border rounded-2xl p-4 md:p-6 shadow-sm col-span-2">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h3 className="font-semibold text-gray-800">Deals Statistics</h3>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm shadow-sm w-full sm:w-auto">
          Add Deal
        </button>
      </div>

      {/* ===== DESKTOP + TABLET TABLE ===== */}
      <div className="hidden md:block overflow-x-auto">

        {/* Column Headers */}
        <div className="grid grid-cols-5 text-xs text-gray-400 pb-3 border-b min-w-[700px]">
          <div className="text-center">SALES REP</div>
          <div className="text-center">CATEGORY</div>
          <div className="text-center">LOCATION</div>
          <div className="text-center">DATE</div>
          <div className="text-center">STATUS</div>
        </div>

        {/* Rows */}
        <div className="min-w-[700px]">
          {data.map((deal, i) => (
            <div
              key={i}
              className="grid grid-cols-5 items-center border-b py-4 hover:bg-gray-50 transition"
            >
              {/* Sales Rep */}
              <div className="flex items-center justify-center gap-3 pl-7">
                <div className="w-10 h-10 p-5 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                  {deal.name.charAt(0)}
                </div>

                <div className="flex flex-col items-center gap-50">
                  <p className="font-medium text-sm">{deal.name}</p>
                  <p className="text-xs text-gray-400">{deal.email}</p>
                </div>
              </div>

              {/* Category */}
              <div className="text-center text-sm">
                {deal.category}
              </div>

              {/* Location */}
              <div className="text-center">
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600">
                  {deal.location}
                </span>
              </div>

              {/* Date */}
              <div className="text-center text-sm text-gray-500">
                {deal.date}
              </div>

              {/* Status */}
              <div className="text-center">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    deal.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {deal.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MOBILE CARD VIEW ===== */}
      <div className="md:hidden space-y-4">
        {data.map((deal, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 space-y-3 "
          >
            {/* Rep */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                {deal.name.charAt(0)}
              </div>

              <div>
                <p className="font-medium">{deal.name}</p>
                <p className="text-xs text-gray-400">{deal.email}</p>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 text-sm ">

              <div>
                <p className="text-gray-400 text-xs">Category</p>
                <p>{deal.category}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Location</p>
                <span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600">
                  {deal.location}
                </span>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Date</p>
                <p>{deal.date}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Status</p>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    deal.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {deal.status}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
