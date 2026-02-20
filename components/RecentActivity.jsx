// export default function RecentActivity() {
// return (
// <div className="bg-white rounded-xl p-4">
// <h3 className="font-medium mb-4">Recent Activity</h3>
// <ul className="space-y-3 text-sm">
// <li>Updated calendar events</li>
// <li>New theme completed</li>
// <li>Created new task</li>
// </ul>
// </div>
// )
// }
// analytics-data.ts
export const recentActivityData = [
  {
    user: "Bessie Cooper",
    action: "Updated calendar events",
    date: "Feb 3",
    icon: "📅"
  },
  {
    user: "Leslie Alexander",
    action: "Completed new theme",
    date: "Feb 2",
    icon: "🎨"
  },
  {
    user: "Jacob Jones",
    action: "Created a new task",
    date: "Feb 1",
    icon: "✅"
  },
  {
    user: "Jenny Wilson",
    action: "New member joined",
    date: "Jan 30",
    icon: "👤"
  }
];


export default function RecentActivity() {
  const data = recentActivityData // make sure data is defined

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between mb-3">
        <h3 className="font-medium">Recent Activity</h3>
        <button className="text-xs text-indigo-600">See All</button>
      </div>
      <ul className="space-y-4">
        {data.map((act, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-2 p-2 hover:bg-gray-50 rounded-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-medium">
                {act.icon}
              </div>
              <div className="text-sm">
                <p className="font-medium">{act.user}</p>
                <p className="text-gray-500">{act.action}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{act.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
