import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  { name: 'Jan', principal: 700, interest: 300, fees: 50 },
  { name: 'Feb', principal: 750, interest: 280, fees: 60 },
  { name: 'Mar', principal: 800, interest: 260, fees: 70 },
  { name: 'Apr', principal: 820, interest: 240, fees: 80 },
  { name: 'May', principal: 880, interest: 220, fees: 90 },
  { name: 'Jun', principal: 930, interest: 200, fees: 100 },
]

export default function GroupedBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="name" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          wrapperStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
          contentStyle={{ backgroundColor: '#0f172a', borderRadius: 8 }}
        />
        <Legend />
        <Bar dataKey="principal" fill="#60a5fa" />
        <Bar dataKey="interest" fill="#34d399" />
        <Bar dataKey="fees" fill="#fb923c" />
      </BarChart>
    </ResponsiveContainer>
  )
}