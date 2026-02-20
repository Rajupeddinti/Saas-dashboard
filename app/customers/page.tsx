// export default function CustomersPage() {
//   return (
//     <div className="bg-white rounded-xl p-4 h-80">
//       <h3 className="font-medium">Customers Page</h3>
//       <p>Content goes here...</p>
//     </div>
//   )
// }
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Cody Fisher',
    date: '22 Dec, 2023',
    rating: 5,
    likes: 10,
    text:
      'Cody Fisher spearheads SpaceX, Tesla, and Neuralink, propelling sustainable energy, space exploration, and transformative technology with audacious vision and relentless ambition, reshaping the future.',
  },
  {
    name: 'Arlene McCoy',
    date: '26 Oct, 2020',
    rating: 4,
    likes: 16,
    text:
      'Arlene McCoy leads SpaceX, Tesla, and Neuralink, propelling sustainable energy, space exploration, and transformative technology with audacious vision and relentless ambition.',
  },
  {
    name: 'Guy Hawkins',
    date: '22 Oct, 2020',
    rating: 4,
    likes: 20,
    text:
      'Customer reviews influence choices, providing insights on product quality, service, and satisfaction. Honest feedback guides decisions, shaping consumer experiences.',
  },
]
function Stars({ value }: { value: number }) {
  return (
    <div className="flex justify-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= value ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.371-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.075 9.382c-.783-.57-.38-1.81.588-1.81H6.825a1 1 0 00.95-.69l1.286-3.955z" />
        </svg>
      ))}
    </div>
  )
}

export default function CustomersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {/* LEFT COLUMN */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-6 space-y-6"
      >
        
        <div className="bg-white rounded-xl p-6 text-center space-y-3">
            <img
                src="https://i.pravatar.cc/100?img=12"
                className="w-20 h-20 rounded-full mx-auto border-4 border-indigo-100"
            />

            <p className="text-gray-500 text-sm">Customer Reviews</p>
            <h2 className="text-4xl font-bold text-gray-900">4.50</h2>
            <Stars value={4} />
            <p className="text-sm text-gray-400">Based on 130 reviews</p>
        </div>


        {[5, 4, 3, 2, 1].map((star, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 text-sm">{star}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden  ">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${90 - i * 15}%` }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-indigo-500 h-2 rounded-full"
              />
            </div>
            <span className="text-sm text-gray-400">{90 - i * 15}%</span>
          </div>
        ))}

        <div className="bg-white rounded-xl p-6 space-y-4">
  <h3 className="font-semibold text-gray-800">What Customers Like</h3>

  <div className="space-y-3">
    {[
      {
        label: 'Great Value',
        votes: 62,
        color: 'yellow',
        icon: '💎',
      },
      {
        label: 'Fun Factor',
        votes: 44,
        color: 'green',
        icon: '🎉',
      },
      {
        label: 'Teachers',
        votes: 5,
        color: 'yellow',
        icon: '📚',
      },
      {
        label: 'Too Busy',
        votes: 32,
        color: 'pink',
        icon: '⏳',
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{item.icon}</span>
          <span className="text-sm font-medium">{item.label}</span>
        </div>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-600">
          {item.votes} votes
        </span>
      </div>
    ))}
  </div>
</div>

      </motion.div>

      {/* RIGHT COLUMN */}
      <div className="lg:col-span-2 space-y-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-indigo-500 text-white rounded-xl p-6 flex justify-between items-center"
        >
          <div>
            <h2 className="text-2xl font-bold">Reviews of our customers</h2>
            <p className="text-sm">(100+) 5.0 Ratings</p>
          </div>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </motion.div>

        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 30}`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{r.name}</h4>
                  <p className="text-xs text-gray-400">{r.date}</p>
                </div>
              </div>
              <div>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>{idx < r.rating ? '⭐' : '☆'}</span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 mt-4 text-sm">{r.text}</p>

            <div className="flex justify-between text-sm text-gray-400 mt-4">
              <div className="flex gap-4">
                <span>💬 Reply</span>
                <span>🔁 Share</span>
              </div>
              <span>👍 {r.likes}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

