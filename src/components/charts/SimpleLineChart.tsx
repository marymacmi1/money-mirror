import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  { month: 'Jan', balance: 10200, payment: 1200 },
  { month: 'Feb', balance: 9800, payment: 1400 },
  { month: 'Mar', balance: 9200, payment: 1500 },
  { month: 'Apr', balance: 8600, payment: 1600 },
  { month: 'May', balance: 7800, payment: 1700 },
  { month: 'Jun', balance: 6900, payment: 1800 },
  { month: 'Jul', balance: 6000, payment: 1900 },
]

export default function SimpleLineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          wrapperStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
          contentStyle={{ backgroundColor: '#0f172a', borderRadius: 8 }}
        />
        <Legend />
        <Line type="monotone" dataKey="balance" stroke="#38bdf8" strokeWidth={2} />
        <Line type="monotone" dataKey="payment" stroke="#fbbf24" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}